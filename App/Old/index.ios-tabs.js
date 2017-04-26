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
import store from './App/Redux/store';
import TabView from 'react-native-scrollable-tab-view';

import {
    View,
    Text,
    AppRegistry,
    StyleSheet,
    //Navigator,  // @todo use this when homepage is being used
} from 'react-native';

export default class Quizian extends Component {

    // renderSceneMethod(route, nav) {
    //     return <Main
    //         message={route.message}
    //         navigator={nav}
    //         //onExampleExit={this.props.onExampleExit}
    //     />
    // }

    render() {
        return (
            <Provider store={store}>
                <TabView>
                    <Main tabLabel="home"/>
                    <View tabLabel="start quiz"><Text>Start Quiz</Text></View>
                </TabView>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

AppRegistry.registerComponent('Quizian', () => Quizian);
