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
        this.props.getData(this.props.currentCat, this.props.catIndex[0])
        this.fadeInQuiz()
        this.startTimerInit()

        //console.log(quizData)
        //console.log('Current Cat:')
        //console.log(this.props.currentCat)
        // console.log('working???')
        // console.log(this.props.historyIndex)
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

        this.props.chooseCat()

        /**
         * question_number will be tracked just to get to the max number of questions
         * vary this based on category - I could still use a consistent index but it would need to vary based on the
         * the following needs to be a function that takes in the cat and does the same thing for each cat
         */

        let cat_array = this.props.catIndex
        cat_array.shift()
        /**
         * reset index here for current cat? actually that should happen after questions is chosen???
         * here I should just start the entire process again, and somewhere I need to see if the index is empty
         * for a given category?
         */


        //this.props.getData(this.props.currentCat, this.props.catIndex[0])


        /**
         * I need a method here that will replace whatever the current index is? or should I have another conditional?
         */


        /**
         * Add conditionals here....
         */
        //console.log('before conditional???')
        if (this.props.currentCat === 'history') {
            //console.log('current cat is history?????')

            if (cat_array) {
                console.log('we got to cat array?')
                this.props.answerHistoryQuestion(cat_array)
            } else {
                /**
                 * create new history array
                 */
                const cat_length = quizData[0].history.length
                let cat_key_array = []
                for (let i = 0; i < cat_length; ++i) {
                    cat_key_array.push(i)
                }
                const cat_keys = shuffleArray(cat_key_array)
                this.props.answerHistoryQuestion(cat_keys)
            }
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
        this.props.getData(this.props.currentCat, this.props.catIndex[0])
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
            let cat_array = this.props.catIndex

            console.log('TESTER')
            console.log(cat_array)
            console.log('TESTER 2')
            console.log(this.props.getQuestions)
            //const current_index = history_array.shift()

            /**
             * Here I can dispense with the 'current questions' state/prop since I don't want to
             * track in a straight line when I'm alternating between categories...
             * @type {XML}
             */

            //this.props.answerHistoryQuestion()

            // console.log('in get question')
            // console.log(history_array)
            /**
             * @todo change get questions to get question
             * @type {XML}
             */

            var currentQuiz = <Questions
                //arrayData={this.props.getQuestions[cat_array[0]]}
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
    //historyIndex: state.historyIndex, // @todo remove this?
    catIndex: state.catIndex,
    currentCat: state.currentCat,
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

        /**
         * This needs to get the correct data based on category, so a reducer should probably
         * return just the one question we need based on all the details
         * 1) cat
         * 2) current cat index
         * @todo within the reducer we can have the conditionals...
         */

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

        console.log('this is the quiz data')
        console.log(quiz_data)
        console.log('current index')
        console.log(index)
        console.log('current question')
        console.log(quiz_data[index])
        /**
         * I should just grab the question as is without modifying it...
         * @todo by default this is returning an array of all of the questions in that category
         * @todo what I want to do is return just one question, the category at it's current index...
         */

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

        //});
        /**
         * @todo working this far
         */
        dispatch({type: 'DATA_AVAILABLE', payload: question[0]})
    }
})

export const Quiz = connect(mapStateToProps, mapActionsToProps)(_Quiz)
