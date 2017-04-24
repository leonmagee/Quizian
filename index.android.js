/**
 * IOS Index file - this code can be shared between index.ios and index.android
 * @todo find router to work with Android?
 * @todo remove libraries that you are not using? svg & swipe?
 */
import React, {Component} from 'react';
import Main from './App/Components/Main'; // homepage component
//import {Quiz} from './App/Components/Quiz';
//import {MainWrap} from './App/Components/MainWrap';
import {Provider} from 'react-redux';
import store from './App/Store/store';

import {
    AppRegistry,
    StyleSheet,
    //Navigator,  // @todo use this when homepage is being used
} from 'react-native';

export default class Quizian extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
            // <Provider store={store}>
            //     <Navigator
            //         style={styles.container}
            //         initialRoute={{
            //             component: Main,
            //             title: 'Home',
            //         }}
            //         navigationBarHidden={false}
            //     />
            // </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

AppRegistry.registerComponent('Quizian', () => Quizian);

