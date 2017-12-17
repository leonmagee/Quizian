/**
 * Android Index file
 */
import React, {Component} from 'react';
import Homepage from './App/Components/Homepage';
import HomepageImage from './App/Components/HomepageImage';
import Credits from './App/Components/Credits';
import {View, StatusBar, AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import store from './App/Redux/store';

export default class Quizian extends Component {

    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <StatusBar hidden />
                    <HomepageImage />
                </View>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('Quizian', () => Quizian);
