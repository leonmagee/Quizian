/**
 * Button Component
 */
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 19,
        fontFamily: 'lalezar',
        backgroundColor: 'transparent',
    },
});

class StartQuizButton extends Component {

    render() {

        return (
            <TouchableHighlight onPress={() => this.props.handleClick()}
                                underlayColor="transparent">
                <Text style={styles.button}>{this.props.buttonText}</Text>
            </TouchableHighlight>
        )
    }
}

module.exports = StartQuizButton;