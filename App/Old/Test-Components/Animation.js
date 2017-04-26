import React, {Component} from 'react';
//import {shuffleArray} from '../Utils/helper';

import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Easing
} from 'react-native';

export default class Animatron extends Component {

    componentWillMount() {
        this.animatedValue = new Animated.Value(100);
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 200,
            duration: 3000,
            easing: Easing.bounce
        }).start()
    }

    render() {
        const animatedStyle = { width: this.animatedValue }
        return (
            <View style={styles.wrapper}>
                <Animated.View style={[styles.box, animatedStyle]}>


                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    box: {
        backgroundColor: '#444',
        height: 100,
        width: 100
    },
    // text: {
    //     fontSize: 30,
    //     fontWeight: 'bold',
    //     color: 'white',
    // }
})