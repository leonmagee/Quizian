/**
 * IOS Index file
 */
import React, {Component} from 'react';
import Homepage from './App/Components/Homepage';
import {Provider} from 'react-redux';
import store from './App/Redux/store';
import {QuizWrap} from './App/Components/QuizWrap';
import Animatron from './App/Old/Test-Components/Animation';

import {
    AppRegistry,
} from 'react-native';

export default class Quizian extends Component {

    render() {
        return (
            <Provider store={store}>
                <QuizWrap />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('Quizian', () => Quizian);
