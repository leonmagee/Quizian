/**
 * IOS Index file
 */
import React, {Component} from 'react';
import Homepage from './App/Components/Homepage';
import HomepageImage from './App/Components/HomepageImage';
//import {Categories} from './App/Components/Categories';
//import {Results} from './App/Components/Results';
import {Provider} from 'react-redux';
import store from './App/Redux/store';
//const Homepage = Results // @todo remove

import {
    AppRegistry,
} from 'react-native';

export default class Quizian extends Component {

    render() {
        return (
            <Provider store={store}>
                <HomepageImage />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('Quizian', () => Quizian);
