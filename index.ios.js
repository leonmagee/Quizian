/**
 * IOS Index file
 */
import React, {Component} from 'react';
//import Homepage from './App/Components/Homepage';
import Homepage from './App/Components/Categories';
import {Provider} from 'react-redux';
import store from './App/Redux/store';
//import {QuizWrap} from './App/Components/QuizWrap';
//import Animatron from './App/Old/Test-Components/Animation';
import SVG_Tester from './App/Old/Test-Components/svg-tester';
//import Pie from './App/Old/Test-Components/Pie';

import {
    AppRegistry,
} from 'react-native';

export default class Quizian extends Component {

    render() {
        return (
            <Provider store={store}>
                <Homepage />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('Quizian', () => Quizian);
