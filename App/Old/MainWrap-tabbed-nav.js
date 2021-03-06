// @todo change this to quiz wrap? Change main.js to homepage?
import React, {Component} from 'react';
import {Quiz} from './Quiz'
import {QuizResults} from './QuizResults';
import {connect} from 'react-redux';
import {View} from 'react-native';
import styles from '../Styles/DefaultStyles'
import TabView from 'react-native-scrollable-tab-view';

// console.log(this.state);
//
// const _MainWrap = () => (
//     <QuizResults />
//     // <Quiz />
// );

class _MainWrap extends Component {

    render() {

        //console.log(this.props);

        if (this.props.quizResults) {
            var mainComponent = <QuizResults />;
        } else {
            var mainComponent = <Quiz />;
        }

        return (
            <TabView tabBarPosition="bottom">
                <View tabLabel="quiz" style={styles.outerWrapMain}>
                    {mainComponent}
                </View>
                <View tabLabel="results">
                    /**
                     * The results page can be constantly updated depending on the state?
                     */
                </View>
            </TabView>
        )
    }
}

const mapStateToProps = (state) => ({
    // currentQuestion: state.currentQuestion,
    // numberQuestions: state.numberQuestions,
    // correctAnswer: state.correctAnswer,
    // falseAnswer: state.falseAnswer,
    // answerSubmitted: state.answerSubmitted,
    // answerResultString: state.answerResultString,
    quizResults: state.quizResults,
})

const mapActionsToProps = (dispatch) => ({})

export const MainWrap = connect(mapStateToProps, mapActionsToProps)(_MainWrap);
