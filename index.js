/**
 * IOS Index file
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import HomepageImage from './App/Components/HomepageImage';
// import HomepageImage from './App/Components/Settings';
import store from './App/Redux/store';

export default class Quizian extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomepageImage />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Quizian', () => Quizian);
