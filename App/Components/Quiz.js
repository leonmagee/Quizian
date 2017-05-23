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
    ActivityIndicator,
    Animated,
} from 'react-native'

let animatedOpacity = new Animated.Value(0);

class _Quiz extends Component {

    componentDidMount() {
        this.props.getRemoteData(this.props.numberQuestions);
        this.fadeInQuiz();
        this.startTimer();
    }

    countTime() {

        if (!this.props.answerSubmitted) {

            this.props.incrementTimer();

            if (this.props.timerValue > 0) {
                this.startTimer();
            } else {
                this.props.timerExpires()
                console.log('timerz expired!')
            }
        }
    }

    startTimer() {
        setTimeout(() => this.countTime(), 1000);
    }

    fadeInQuiz() {
        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 300,
        }).start();
    }

    fadeOutQuiz() {
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 300,
        }).start();
    }

    nextQuestion(question_number) {
        this.fadeOutQuiz()
        setTimeout(() => this.goToNextQuestion(question_number), 600)
    }

    goToNextQuestion(question_number) {
        if (( this.props.currentQuestion + 2 ) === this.props.numberQuestions) {
            //this.setState({nextText: 'RESULTS'})
            this.props.finalQuestion()
        }
        if (( this.props.currentQuestion + 1 ) === this.props.numberQuestions) {
            //this.setState({nextText: 'RESULTS'})
            this.props.goToResults();
        } else {
            this.props.goToNextQuestion(question_number);
            this.fadeInQuiz()
            this.startTimer()
        }
    }

    resetQuiz() {
        this.props.getRemoteData(this.props.numberQuestions);
        this.fadeInQuiz();
        this.startTimer(); // this is broken since the timer is already running when you click this button, so it makes 2 timers...
        this.props.resetQuizClicked();
        //this.setState({nextText: 'NEXT QUESTION'}) //@todo handle with Redux reducer
    }

    answerChosen(correct, key) {

        /**
         * A choice was made
         */
        this.props.answerButtonClicked();

        /**
         * Set Chosen Answer Key
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
                <QuizButton handleClick={() => this.nextQuestion(1)} buttonText={this.props.nextText}/>
        } else {
            var nextQuestionButton =
                <QuizButton disabled={true} buttonText={this.props.nextText}/>
        }

        if (this.props.getQuestions) {
            var currentQuiz = <Questions
                arrayData={this.props.getQuestions[this.props.currentQuestion]}
                answerChosen={(correct, key) => this.answerChosen(correct, key)}
                answerSubmitted={this.props.answerSubmitted}
                correctIncorrectString={this.props.answerResultString}
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
                    <View style={styles.topBarDetails}>
                        <Text style={styles.topBarDetailsText}>
                            Question {this.props.currentQuestion + 1} of {this.props.numberQuestions}
                        </Text>
                        <Text style={styles.topBarDetailsText}>
                            Correct: {this.props.correctAnswer} - Incorrect: {this.props.falseAnswer}
                        </Text>
                    </View>
                    <View style={styles.topBarTimer}>
                        <Text style={styles.topBarTimerText}>{this.props.timerValue}</Text>
                    </View>
                </View>

                <Animated.View style={[styles.quizWrap, {opacity: animatedOpacity}]}>
                    {currentQuiz}
                </Animated.View>

                <View style={styles.menuBar}>
                    <QuizButton handleClick={() => this.resetQuiz()} buttonText="RESET"/>
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
    resetQuiz: state.resetQuiz,
    timerValue: state.timerValue,
    nextText: state.nextText,
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
    finalQuestion() {
        dispatch({type: 'FINAL_QUESTION'})
    },
    goToResults() {
        dispatch({type: 'QUIZ_RESULTS'})
    },
    questionDisplayed() {
        dispatch({type: 'QUESTION_DISPLAYED'})
    },
    resetQuizClicked() {
        dispatch({type: 'START_NEW_QUIZ'})
    },
    incrementTimer() {
        dispatch({type: 'TIMER_TICK'})
    },
    timerExpires() {
        dispatch({type: 'TIMER_EXPIRES'})
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
