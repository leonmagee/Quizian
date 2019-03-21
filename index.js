/**
 * IOS Index file
 */
import React, { Component } from 'react';
// import Homepage from './App/Components/Homepage';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import HomepageImage from './App/Components/HomepageImage';
// import Credits from './App/Components/Credits';
// import {Categories} from './App/Components/Categories';
// import {Results} from './App/Components/Results';
import store from './App/Redux/store';
// const Homepage = Results // @todo remove

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
