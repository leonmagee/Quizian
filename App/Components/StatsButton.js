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
        color: '#222',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'Lalezar',
        //backgroundColor: 'transparent',
    },
});

class StatsButton extends Component {

    render() {

        return (
            <TouchableHighlight onPress={() => this.props.handleClick()}
                                underlayColor="transparent">
                <Text style={styles.button}>{this.props.buttonText}</Text>
            </TouchableHighlight>
        )
    }
}

module.exports = StatsButton;