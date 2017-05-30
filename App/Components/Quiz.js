import React, {Component} from 'react'
import styles from '../Styles/DefaultStyles'
import quizData from '../Data/quizData'
import {Questions} from './Questions'
import QuizButton from './QuizButton'
import {connect} from 'react-redux'
import variables from '../Styles/Variables'
import {shuffleArray, intermediateArray} from '../Utils/helper'
import LinearGradient from 'react-native-linear-gradient'

import {
    Text,
    View,
    ActivityIndicator,
    Animated,
} from 'react-native'

let animatedOpacity = new Animated.Value(0)

class _Quiz extends Component {

    constructor() {
        super()

        this.state = {
            timerValue: 15,
        }
    }

    componentDidMount() {
        this.props.getData(this.props.currentCat, this.props.catIndex[0])
        this.fadeInQuiz()
        this.startTimerInit()
    }

    countTime() {

        if (!this.props.answerSubmitted) {
            this.incrementTimer();
            if (this.state.timerValue > 0) {
                this.startTimer();
            } else {
                this.props.timerExpires()
            }
        }
    }

    incrementTimer() {
        this.setState({
            timerValue: ( this.state.timerValue - 1 )
        })
    }

    startTimerInit() {
        this.clearTheTimer()
        global_timeout_wrap = setTimeout(() => {
            this.startTimer();
        }, 400)
    }

    startTimer() {
        global_timeout = setTimeout(() => this.countTime(), 1000)
    }

    /**
     * @todo timer is not resetting with reset button?
     */
    clearTheTimer() {
        if (typeof global_timeout !== 'undefined') {
            clearTimeout(global_timeout)
        }
        if (typeof global_timeout_wrap !== 'undefined') {
            clearTimeout(global_timeout_wrap)
        }
    }

    fadeInQuiz() {
        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 300,
        }).start()
    }

    fadeOutQuiz() {
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 300,
        }).start()
    }

    nextQuestion(question_number) {
        this.fadeOutQuiz()
        setTimeout(() => this.goToNextQuestion(question_number), 600)
    }

    goToNextQuestion(question_number) {

        let cat_array = this.props.catIndex
        cat_array.shift()

        const cat = this.props.currentCat

        if (cat === 'history') {
            if (cat_array[0]) {
                this.props.answerHistoryQuestion(cat_array)
            } else {
                const cat_keys = intermediateArray(quizData[0].history.length)
                this.props.answerHistoryQuestion(cat_keys)
            }
        } else if (cat === 'sports') {
            if (cat_array[0]) {
                this.props.answerSportsQuestion(cat_array)
            } else {
                const cat_keys = intermediateArray(quizData[0].sports.length)
                this.props.answerSportsQuestion(cat_keys)
            }
        } else if (cat === 'music') {
            if (cat_array[0]) {
                this.props.answerMusicQuestion(cat_array)
            } else {
                const cat_keys = intermediateArray(quizData[0].music.length)
                this.props.answerMusicQuestion(cat_keys)
            }
        } else if (cat === 'entertainment') {
            if (cat_array[0]) {
                this.props.answerEntertainmentQuestion(cat_array)
            } else {
                const cat_keys = intermediateArray(quizData[0].entertainment.length)
                this.props.answerEntertainmentQuestion(cat_keys)
            }
        } else if (cat === 'geography') {
            if (cat_array[0]) {
                this.props.answerGeographyQuestion(cat_array)
            } else {
                const cat_keys = intermediateArray(quizData[0].geography.length)
                this.props.answerGeographyQuestion(cat_keys)
            }
        }

        this.clearTheTimer();
        if (( this.props.currentQuestion + 2 ) === this.props.numberQuestions) {
            this.props.finalQuestion()
        }
        if (( this.props.currentQuestion + 1 ) === this.props.numberQuestions) {
            this.props.goToResults()
        } else {
            this.props.chooseCat()
            // @todo do I still need the following???
            this.props.goToNextQuestion(question_number);
            this.fadeInQuiz()
            this.startTimerInit()
        }
    }

    resetQuiz() {
        this.clearTheTimer()
        this.props.getData(this.props.currentCat, this.props.catIndex[0])
        this.props.resetQuizClicked()
        this.fadeInQuiz()
    }

    answerChosen(correct, key) {
        /**
         * A choice was made
         */
        this.props.answerButtonClicked()
        /**
         * Set Chosen Answer Key
         */
        this.props.answerButtonKey(key)
        /**
         * Was it correct?
         */
        if (correct) {
            this.props.correctAnswerClicked()
        } else {
            this.props.incorrectAnswerClicked()
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
                arrayData={this.props.getQuestions}
                answerChosen={(correct, key) => this.answerChosen(correct, key)}
                answerSubmitted={this.props.answerSubmitted}
                correctIncorrectString={this.props.answerResultString}
                answerKey={this.props.answerKey}
            ></Questions>
        } else {
            var currentQuiz = <ActivityIndicator
                animating={true}
                color="#FFF"
                size="large"></ActivityIndicator>
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
                        <Text style={styles.topBarTimerText}>{this.state.timerValue}</Text>
                    </View>
                </View>

                <Animated.View style={[styles.quizWrap, {opacity: animatedOpacity}]}>
                    <View style={styles.catHeaderWrap}>
                        <Text style={styles.catHeaderText}>{this.props.catText}</Text>
                    </View>
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
    nextText: state.nextText,
    catIndex: state.catIndex,
    currentCat: state.currentCat,
    catText: state.catText,
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
    timerExpires() {
        dispatch({type: 'TIMER_EXPIRES'})
    },
    answerHistoryQuestion(array) {
        dispatch({type: 'HISTORY_QUESTION', payload: array})
    },
    answerSportsQuestion(array) {
        dispatch({type: 'SPORTS_QUESTION', payload: array})
    },
    answerEntertainmentQuestion(array) {
        dispatch({type: 'ENTERTAINMENT_QUESTION', payload: array})
    },
    answerMusicQuestion(array) {
        dispatch({type: 'MUSIC_QUESTION', payload: array})
    },
    answerGeographyQuestion(array) {
        dispatch({type: 'GEOGRAPHY_QUESTION', payload: array})
    },
    chooseCat() {
        dispatch({type: 'NEW_CAT'})
    },
    getData(cat, index) {
        dispatch({type: 'START_DATA'})

        const question = [];

        let quiz_data = false
        if (cat === 'history') {
            quiz_data = quizData[0].history
        } else if (cat === 'sports') {
            quiz_data = quizData[0].sports
        } else if (cat === 'music') {
            quiz_data = quizData[0].music
        } else if (cat === 'entertainment') {
            quiz_data = quizData[0].entertainment
        } else if (cat === 'geography') {
            quiz_data = quizData[0].geography
        }

        let trivia_question = quiz_data[index]
        const answers = [];
        answers.push({answer: trivia_question.c, correct: true});
        trivia_question.i.map((incorrect_answer) => {
            answers.push({answer: incorrect_answer, correct: false});
        })
        question.push({
            question: trivia_question.q,
            answers: shuffleArray(answers),
        });

        dispatch({type: 'DATA_AVAILABLE', payload: question[0]})
    }
})

export const Quiz = connect(mapStateToProps, mapActionsToProps)(_Quiz)