/**
 * Android Index file
 */
import React, {Component} from 'react';
import Homepage from './App/Components/Homepage';
import {Provider} from 'react-redux';
import store from './App/Redux/store';

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

