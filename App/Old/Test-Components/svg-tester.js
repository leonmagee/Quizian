import React, {Component} from 'react';
import variables from '../../Styles/Variables';

import {
    View,
    Animated,
    Easing,
    //Dimensions
} from 'react-native';

import Svg, {
    //LinearGradient,
    Circle,
    //Defs,
    //Stop,
    //Use,
    //Symbol,
    //Path,
} from 'react-native-svg';

//const {width} = Dimensions.get('window');


class SVG_Tester extends Component {

    constructor() {
        super();

        this.state = {
            testState: 0.3,
        }
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
        console.log('animatron:', this.animatedValue);
    }

    componentDidMount() {
        //console.log('testy did:', this.state.testState);

        // Animated.timing(this.animatedValue, {
        //     toValue: 0.8,
        //     duration: 3000,
        //     easing: Easing.bounce
        // }).start()
    }

    render() {


        const circunference = Math.PI * (70 * 2);

        return (
            <View style={{backgroundColor: '#DDD', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Svg
                    height="280"
                    //width={width * 0.4}
                    width="280"
                    viewbox="0 0 280 280"
                >
                    <Circle fill={variables.brandPrimary} cx="140" cy="140" r="140"/>
                    <Circle rotate="-90" origin="140, 140" fill={variables.brandPrimary} cx="140" cy="140" r="70"
                            stroke={variables.brandSecond}
                            strokeDasharray={[circunference * 0.3, circunference]} strokeWidth="140"/>
                </Svg>
            </View>
        );

    }

}

export default SVG_Tester;
