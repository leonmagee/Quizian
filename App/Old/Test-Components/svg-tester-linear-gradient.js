import React from 'react';

import {
    View,
    Dimensions
} from 'react-native';

import Svg, {
    LinearGradient,
    Circle,
    Defs,
    Stop,
    Use,
    Symbol,
    Path,
} from 'react-native-svg';

const {width} = Dimensions.get('window');

const circunference = Math.PI * (70 * 2);

const GoalChart = () => (
    <View style={{backgroundColor: '#DDD', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Svg
            height="280"
            //width={width * 0.4}
            width="280"
            viewbox="0 0 280 280"
        >
            <Defs>
                <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <Stop offset="0" stopColor="#2E8AEC" stopOpacity="1"/>
                    <Stop offset="1" stopColor="#3BD8FC" stopOpacity="1"/>
                </LinearGradient>
            </Defs>
            <Circle fill="orange" cx="140" cy="140" r="140"/>
            <Circle rotate="-180" origin="140, 140" fill="orange" cx="140" cy="140" r="70" stroke="red"
                    strokeDasharray={[circunference * 0.8, circunference]} strokeWidth="140"/>
        </Svg>
    </View>
);

export default GoalChart;
