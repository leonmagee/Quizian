/**
 * Button Component - could be stateless?
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
        fontSize: 22,
        fontFamily: 'lalezar',
        backgroundColor: 'transparent',
    },
});

class QuizButton extends Component {

    render() {

        if (this.props.disabled == true) {
            var disabled = true;
            var opacity = 0.5;
        } else {
            var disabled = false;
            var opacity = 1;
        }

        return (
            <TouchableHighlight onPress={() => this.props.handleClick()}
                                underlayColor="transparent" disabled={disabled}>
                <Text style={[styles.button, {opacity: opacity}]}>{this.props.buttonText}</Text>
            </TouchableHighlight>
        )
    }
}

module.exports = QuizButton;