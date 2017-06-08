/**
 * IOS Index file
 */
import React, {Component} from 'react';
import Homepage from './App/Components/Homepage';
//import Homepage from './App/Components/Stats'
//import Homepage from './App/ARTd3/ReactArt'
//import Homepage from './App/ARTd3/LineGraph'
//import Homepage from './App/ARTd3/TestD3New'
//import Homepage from './App/ARTd3/BarGraphCustom'
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
