import React, {Component} from 'react'
import styles from '../Styles/DefaultStyles'
import {connect} from 'react-redux'
import QuizButton from './QuizButton'
import variables from '../Styles/Variables'

import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native'

import Svg, {
    Circle,
} from 'react-native-svg';

const circunference = Math.PI * (70 * 2);

class _QuizResults extends Component {

    constructor(props) {
        super(props)

        function round(value, decimals) {
            return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
        }

        const correct = props.correctAnswer;
        const incorrect = props.falseAnswer;
        // const correct = 0;
        // const incorrect = 5;

        const correct_percent = ( correct / props.numberQuestions );
        const incorrect_percent = ( incorrect / props.numberQuestions );

        const correct_percent_round = round(correct_percent * 100, 2);
        const incorrect_percent_round = round(incorrect_percent * 100, 2);

        this.state = {
            correct: (correct / props.numberQuestions),
            incorrect: (correct / props.numberQuestions),
            correct_percent: correct_percent_round,
            incorrect_percent: incorrect_percent_round,
        }
    }

    startNewQuiz() {
        this.props.letsStartNewQuiz();
    }

    render() {

if ( this.state.correct ) {

    var correctPie = <Circle rotate="-90" origin="140, 140" fill={variables.brandPrimary} cx="140" cy="140"
                               r="70"
                               stroke={variables.brandSecond}
                               strokeDasharray={[circunference * this.state.correct, circunference]}
                               strokeWidth="140"/>;
} else {
    var correctPie = <Text></Text>
}

        return (
            <View style={styles.outerWrap}>

                <View style={styles.quizResultsWrap}>
                    <Text style={styles.quizResultsHeaderText}>QUIZ RESULTS</Text>

                    <View style={styles.pieChartWrap}>
                        <Svg
                            height="280"
                            //width={width * 0.4}
                            width="280"
                            viewbox="0 0 280 280"
                        >
                            <Circle fill={variables.brandPrimary} cx="140" cy="140" r="140"/>
                            {correctPie}
                        </Svg>
                    </View>

                    <View style={styles.quizResultsTextWrap}>
                        <Text style={styles.quizResultsText}>
                            {this.state.correct_percent}% Correct
                        </Text>
                        <Text style={styles.quizResultsText}>
                            {this.state.incorrect_percent}% Incorrect
                        </Text>
                    </View>

                </View>

                <View style={styles.menuBar}>
                    <QuizButton handleClick={() => this.startNewQuiz()} buttonText="START NEW QUIZ"/>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    correctAnswer: state.correctAnswer,
    falseAnswer: state.falseAnswer,
    numberQuestions: state.numberQuestions,
})

const mapActionsToProps = (dispatch) => ({
    letsStartNewQuiz() {
        dispatch({type: 'START_NEW_QUIZ'})
    },
})

export const QuizResults = connect(mapStateToProps, mapActionsToProps)(_QuizResults);



