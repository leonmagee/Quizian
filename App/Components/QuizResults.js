import React, {Component} from 'react'
var api = require('../Utils/api')
import styles from '../Styles/DefaultStyles'
import {Questions} from './Questions'
import {SampleQuestions} from '../Data/SampleQuestions'
import {connect} from 'react-redux'
import variables from '../Styles/Variables'

import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native'


class _QuizResults extends Component {

    // constructor() {
    //     super();
    // }

    startNewQuiz() {
        console.log('time for new quiz!!!')
        this.props.letsStartNewQuiz();
    }

    render() {

        //var arrayData = SampleQuestions[this.props.currentQuestion];

        return (
            <View style={styles.outerWrap}>

                <View style={styles.quizResultsWrap}>
                    <Text style={styles.quizResultsHeaderText}>QUIZ RESULTS</Text>
                    <Text style={styles.headerText}>
                        Correct: {this.props.correctAnswer} - Incorrect: {this.props.falseAnswer}
                    </Text>
                    <TouchableHighlight
                        underlayColor={variables.brandThirdLite}
                        onPress={() => this.startNewQuiz()}
                        style={styles.nextButton}>
                        <Text style={styles.nextButtonText}>START NEW QUIZ</Text>
                    </TouchableHighlight>
                </View>


            </View>//outer wrap
        )
    }
}

const mapStateToProps = (state) => ({
    //currentQuestion: state.currentQuestion,
    //numberQuestions: state.numberQuestions,
    correctAnswer: state.correctAnswer,
    falseAnswer: state.falseAnswer,
    //answerSubmitted: state.answerSubmitted,
    //answerResultString: state.answerResultString,
})

const mapActionsToProps = (dispatch) => ({
    letsStartNewQuiz() {
        dispatch({type: 'START_NEW_QUIZ'})
    },
})

export const QuizResults = connect(mapStateToProps, mapActionsToProps)(_QuizResults);



