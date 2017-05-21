import React, {Component} from 'react'
var api = require('../Utils/api')
import styles from '../Styles/DefaultStyles'
import {Questions} from './Questions'
import QuizButton from './QuizButton';
import {connect} from 'react-redux'
import variables from '../Styles/Variables'
import {shuffleArray} from '../Utils/helper';
import LinearGradient from 'react-native-linear-gradient';

import {
    Text,
    View,
    TouchableHighlight,
    ActivityIndicator,
    Animated,
} from 'react-native'

let animatedOpacity = new Animated.Value(0);

class _Quiz extends Component {

    componentDidMount() {
        this.props.getRemoteData(this.props.numberQuestions);
        this.fadeInQuiz();
    }

    fadeInQuiz() {
        console.log('quiz faded in');
        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 300,
        }).start();
    }

    fadeOutQuiz() {
        console.log('quiz faded in');
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 300,
        }).start();
    }

    nextQuestion(question_number) {
        this.fadeOutQuiz()
        setTimeout(() => this.goToNextQuestion(question_number), 1000)
    }

    goToNextQuestion(question_number) {
        if (( this.props.currentQuestion + 1 ) === this.props.numberQuestions) {
            this.props.goToResults();
        } else {
            this.props.goToNextQuestion(question_number);
            this.fadeInQuiz()
        }
    }

    answerChosen(correct, key) {

        /**
         * A choice was made
         */
        this.props.answerButtonClicked();

        /**
         * Get Answer Key
         */
        this.props.answerButtonKey(key);

        /**
         * Was it correct?
         */
        if (correct) {
            this.props.correctAnswerClicked();
        } else {
            this.props.incorrectAnswerClicked();
        }
    }

    render() {

        if (this.props.answerSubmitted) {
            var nextQuestionButton =
                <QuizButton handleClick={() => this.nextQuestion(1)} buttonText="NEXT QUESTION"/>
        } else {
            var nextQuestionButton =
                <QuizButton disabled={true} buttonText="NEXT QUESTION"/>
        }

        if (this.props.getQuestions) {
            var currentQuiz = <Questions
                arrayData={this.props.getQuestions[this.props.currentQuestion]}
                answerChosen={(correct, key) => this.answerChosen(correct, key)}
                answerSubmitted={this.props.answerSubmitted}
                answerKey={this.props.answerKey}
            ></Questions>;
        } else {
            var currentQuiz = <ActivityIndicator
                animating={true}
                color="#FFF"
                size="large"></ActivityIndicator>;
        }

        return (
            <LinearGradient colors={variables.gradient} style={styles.outerWrap}>

                <View style={styles.topBar}>
                    <Text style={styles.topBarText}>Top bar info</Text>
                </View>
                <View style={styles.headerWrap}>
                    <Text style={styles.headerText}>
                        Question {this.props.currentQuestion + 1} of {this.props.numberQuestions}
                    </Text>
                    <Text style={styles.headerText}>
                        Correct: {this.props.correctAnswer} - Incorrect: {this.props.falseAnswer}
                    </Text>
                    <View style={styles.correctIncorrectWrap}>
                        {this.props.answerResultString}
                    </View>
                </View>

                <Animated.View style={[styles.quizWrap, {opacity: animatedOpacity}]}>
                    {currentQuiz}
                </Animated.View>

                <View style={styles.footerWrap}>
                    {/*{nextQuestionButton}*/}
                </View>

                <View style={[styles.menuBar, styles.menuBarQuiz]}>
                    <QuizButton handleClick={() => this.nextQuestion(1)} buttonText="RESET"/>
                    {nextQuestionButton}
                </View>
            </LinearGradient>
        )
    }
}

const mapStateToProps = (state) => ({
    currentQuestion: state.currentQuestion,
    numberQuestions: state.numberQuestions,
    correctAnswer: state.correctAnswer,
    falseAnswer: state.falseAnswer,
    answerKey: state.answerKey,
    answerSubmitted: state.answerSubmitted,
    answerResultString: state.answerResultString,
    getQuestions: state.getQuestions,
})

const mapActionsToProps = (dispatch) => ({
    goToNextQuestion(currentQuestion) {
        dispatch({type: 'NEXT_QUESTION', payload: currentQuestion})
    },
    answerButtonClicked() {
        dispatch({type: 'ANSWER_SUBMITTED'})
    },
    answerButtonKey(key) {
        dispatch({type: 'ANSWER_KEY', payload: key})
    },
    correctAnswerClicked() {
        dispatch({type: 'CORRECT_ANSWER'})
    },
    incorrectAnswerClicked() {
        dispatch({type: 'INCORRECT_ANSWER'})
    },
    goToResults() {
        dispatch({type: 'QUIZ_RESULTS'})
    },
    fadeInQuiz() {
        dispatch({type: 'FADE_IN_QUIZ'})
    },
    fadeOutQuiz() {
        dispatch({type: 'FADE_OUT_QUIZ'})
    },
    getRemoteData(num) {
        dispatch({type: 'START_DATA'})

        api.getQuestions(num).then((res) => {

            const questions = [];
            res.map((trivia_question) => {
                const answers = [];
                answers.push({answer: trivia_question.c, correct: true});
                trivia_question.i.map((incorrect_answer) => {
                    answers.push({answer: incorrect_answer, correct: false});
                })
                questions.push({
                    question: trivia_question.q,
                    answers: shuffleArray(answers),
                });
            });
            dispatch({type: 'DATA_AVAILABLE', payload: questions})
        });
    }
})

export const Quiz = connect(mapStateToProps, mapActionsToProps)(_Quiz);
