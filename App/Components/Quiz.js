import React, {Component} from 'react'
var api = require('../Utils/api')
import styles from '../Styles/DefaultStyles'
import {Questions} from './Questions'
//import {SampleQuestions} from '../Data/SampleQuestions'
import {connect} from 'react-redux'
import variables from '../Styles/Variables'

import {
    Text,
    View,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native'


class _Quiz extends Component {

    // constructor() {
    //     super();
    // }

    nextQuestion(question_number) {

        if (( this.props.currentQuestion + 1 ) === this.props.numberQuestions) {
            this.props.goToResults();
        } else {
            this.props.goToNextQuestion(question_number);
        }
    }

    answerChosen(correct) {

        /**
         * A choice was made
         */
        this.props.answerButtonClicked();

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
            var nextQuestionButton = <TouchableHighlight
                underlayColor={variables.brandThirdLite}
                onPress={() => this.nextQuestion(1)}
                style={styles.nextButton}>
                <Text style={styles.nextButtonText}>NEXT QUESTION</Text>
            </TouchableHighlight>
        } else {
            var nextQuestionButton = <Text></Text>
        }

        const __currentQuiz = <Questions
            arrayData={this.props.getQuestions[this.props.currentQuestion]}
            answerChosen={(correct) => this.answerChosen(correct)}
            answerSubmitted={this.props.answerSubmitted}
        ></Questions>;

        const currentQuiz = <ActivityIndicator
            animating={true}
            color="#333"
            size="large"></ActivityIndicator>;

        return (
            <View style={styles.outerWrap}>

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

                <View style={styles.quizWrap}>
                    {currentQuiz}
                </View>

                <View style={styles.footerWrap}>
                    {nextQuestionButton}
                </View>

            </View>//outer wrap
        )
    }
}

const mapStateToProps = (state) => ({
    currentQuestion: state.currentQuestion,
    numberQuestions: state.numberQuestions,
    correctAnswer: state.correctAnswer,
    falseAnswer: state.falseAnswer,
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
    correctAnswerClicked() {
        dispatch({type: 'CORRECT_ANSWER'})
    },
    incorrectAnswerClicked() {
        dispatch({type: 'INCORRECT_ANSWER'})
    },
    goToResults() {
        dispatch({type: 'QUIZ_RESULTS'})
    },
    getRemoteData() {
        dispatch({type: 'START_DATA'})


        //api.getQuestions(this.state.numberQuestions).then((res) => {
        api.getQuestions(5).then((res) => {

            /**
             * Shuffle Array
             * @param array
             * @returns {*}
             * @todo use this same function to randomize animation on main page
             */
            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return array;
            }

            const questions = [];
            res.results.map((trivia_question) => {
                const answers = [];
                answers.push({answer: trivia_question.correct_answer, correct: true});
                trivia_question.incorrect_answers.map((incorrect_answer) => {
                    answers.push({answer: incorrect_answer, correct: false});
                })
                /**
                 * @todo I need to get the key of the correct answer ewre, not inside the render method..
                 */
                questions.push({
                    question: trivia_question.question,
                    answers: shuffleArray(answers),
                });
            });

            dispatch({type: 'DATA_AVAILABLE', payload: questions})
            //return questions;
        });



    }
})

export const Quiz = connect(mapStateToProps, mapActionsToProps)(_Quiz);
