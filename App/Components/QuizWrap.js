import React, {Component} from 'react';
import {Quiz} from './Quiz'
import {QuizResults} from './QuizResults';
import {Categories} from './Categories';
import {connect} from 'react-redux';
import {View} from 'react-native';
import styles from '../Styles/DefaultStyles'

class _QuizWrap extends Component {

    render() {

        if ( this.props.quizResults) {
            var mainComponent = <QuizResults />;
        } else if (this.props.chooseCat) {
            var mainComponent = <Categories />;
        } else {
            var mainComponent = <Quiz />;
        }

        return (
            <View style={styles.outerWrapMain}>
                {mainComponent}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    quizResults: state.quizResults,
    chooseCat: state.chooseCat,
})

const mapActionsToProps = (dispatch) => ({})

export const QuizWrap = connect(mapStateToProps, mapActionsToProps)(_QuizWrap);
