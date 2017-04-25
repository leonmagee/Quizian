import React, {Component} from 'react'
import styles from '../Styles/DefaultStyles'
import {connect} from 'react-redux'
import variables from '../Styles/Variables'

import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native'


class _QuizResults extends Component {

    startNewQuiz() {
        this.props.letsStartNewQuiz();
    }

    render() {

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


            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    correctAnswer: state.correctAnswer,
    falseAnswer: state.falseAnswer,
})

const mapActionsToProps = (dispatch) => ({
    letsStartNewQuiz() {
        dispatch({type: 'START_NEW_QUIZ'})
    },
})

export const QuizResults = connect(mapStateToProps, mapActionsToProps)(_QuizResults);



