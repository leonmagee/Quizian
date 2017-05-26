import React, {Component} from 'react'
import styles from '../Styles/DefaultStyles'
import quizData from '../Data/quizData'
import {Questions} from './Questions'
import QuizButton from './QuizButton'
import {connect} from 'react-redux'
import variables from '../Styles/Variables'
import {shuffleArray} from '../Utils/helper'
import LinearGradient from 'react-native-linear-gradient'

import {
    Text,
    View,
    ActivityIndicator,
    Animated,
} from 'react-native'

let animatedOpacity = new Animated.Value(0)

class _Quiz extends Component {

    componentDidMount() {
        this.props.getData(this.props.numberQuestions)
        this.fadeInQuiz()
        this.startTimerInit()

        console.log('working???');
        console.log(this.props.historyIndex)
    }

    countTime() {

        if (!this.props.answerSubmitted) {

            this.props.incrementTimer();

            if (this.props.timerValue > 0) {
                this.startTimer();
            } else {
                this.props.timerExpires()
            }
        }
    }

    startTimerInit() {
        global_timeout_wrap = setTimeout(() => {
            this.startTimer();
        }, 400)
    }

    startTimer() {
        global_timeout = setTimeout(() => this.countTime(), 1000)
    }

    clearTheTimer() {
        clearTimeout(global_timeout)
        clearTimeout(global_timeout_wrap)
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

        /**
         * question_number will be tracked just to get to the max number of questions
         * vary this based on category - I could still use a consistent index but it would need to vary based on the
         * the following needs to be a function that takes in the cat and does the same thing for each cat
         */
        let history_array = this.props.historyIndex
        history_array.shift()
        if ( history_array ) {
            this.props.answerHistoryQuestion(history_array)
        } else {
            /**
             * create new history array
             * this isn't working yet, test it with shorter array
             * @todo get some test data that will be easier to work with?
             */
            const cat_length = quizData[0].history.length
            let cat_key_array = []
            for ( let i = 0; i < cat_length; ++i ) {
                cat_key_array.push(i)
            }
            const cat_keys = shuffleArray(cat_key_array)
            this.props.answerHistoryQuestion(cat_keys)
        }


        this.clearTheTimer();
        if (( this.props.currentQuestion + 2 ) === this.props.numberQuestions) {
            //this.setState({nextText: 'RESULTS'})
            this.props.finalQuestion()
        }
        if (( this.props.currentQuestion + 1 ) === this.props.numberQuestions) {
            //this.setState({nextText: 'RESULTS'})
            this.props.goToResults()
        } else {
            this.props.goToNextQuestion(question_number);
            this.fadeInQuiz()
            this.startTimerInit()
        }
    }

    resetQuiz() {
        this.props.getData(this.props.numberQuestions)
        this.props.resetQuizClicked()
        this.fadeInQuiz()
        this.clearTheTimer()
        global_timeout_wrap = setTimeout(() => {
            this.startTimer();
        }, 800)
        //this.startTimer(); // this is broken since the timer is already running when you click this button, so it makes 2 timers...
        //this.setState({nextText: 'NEXT QUESTION'}) //@todo handle with Redux reducer
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
            /**
             * This doesn't work since the timer ticking causes everything to re-render...
             * so I need to pull this data in from somewhere else
             */
            let history_array = this.props.historyIndex
            //const current_index = history_array.shift()

            /**
             * Here I can dispense with the 'current questions' state/prop since I don't want to
             * track in a straight line when I'm alternating between categories...
             * @type {XML}
             */

            //this.props.answerHistoryQuestion()

            // console.log('in get question')
            // console.log(history_array)

            var currentQuiz = <Questions
                arrayData={this.props.getQuestions[history_array[0]]}
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
    historyIndex: state.historyIndex,
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
    answerHistoryQuestion(array) {
        dispatch({type: 'HISTORY_QUESTION', payload: array})
    },
    getData(num) {
        dispatch({type: 'START_DATA'})

        const questions = [];

        quizData[0].history.map((trivia_question) => {
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
    }
})

export const Quiz = connect(mapStateToProps, mapActionsToProps)(_Quiz)
