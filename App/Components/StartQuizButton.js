import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    buttonWrap: {
        //backgroundColor: 'rgba(255,255,255,0.8)',
        //paddingHorizontal: 20,
        //paddingTop: 5,
        //paddingBottom: 0,
        //marginTop: 15,
        //borderRadius: 5,
        //backgroundColor: 'red',
    },
    button: {
        //color: '#E51D12',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 28,
        fontFamily: 'lalezar',
        backgroundColor: 'transparent',
    },
});

class StartQuizButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <TouchableHighlight style={styles.buttonWrap} onPress={() => this.props.startQuiz()}
                                underlayColor="transparent">
                <Text style={styles.button}>{this.props.buttonText}</Text>
            </TouchableHighlight>
        )
    }
}

module.exports = StartQuizButton;