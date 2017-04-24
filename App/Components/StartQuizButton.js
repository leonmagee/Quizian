import React, {Component} from 'react';
//import Quiz from './Quiz';
import {MainWrap} from './MainWrap';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    buttonWrap: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 0,
        marginTop: 15,
        borderRadius: 5,
    },
    button: {
        color: '#E51D12',
        fontWeight: 'bold',
        fontSize: 28,
        fontFamily: 'lalezar',
        // lineHeight: 40,
        // padding: 0,
        // margin: 0,
    },
});


class StartQuizButton extends Component {

    constructor(props) {
        super(props);
    }

    // startQuiz() {
    //     console.log(this.props.navigator);
    //     this.props.navigator.push({
    //         component: MainWrap,
    //         title: 'Quizian',
    //         navigationBarHidden: false
    //     });
    // }

    render() {

        return (
            <TouchableHighlight style={styles.buttonWrap} onPress={() => this.props.startQuiz()}
                                underlayColor="rgba(255,255,255,0.9)">
                <Text style={styles.button}>{this.props.buttonText}</Text>
            </TouchableHighlight>
        )
    }

}

module.exports = StartQuizButton;