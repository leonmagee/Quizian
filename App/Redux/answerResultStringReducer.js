import React from 'react';
import {Text} from 'react-native';
import styles from '../Styles/DefaultStyles';
import variables from '../Styles/Variables'

import {
    CORRECT_ANSWER,
    INCORRECT_ANSWER,
} from './actions';

export const answerResultStringReducer = (state = '', action) => {
    const s = styles.correctIncorrectText;
    switch (action.type) {
        case CORRECT_ANSWER:
            return <Text style={[s, {color: variables.brandSecond}]}>CORRECT</Text>
            break;
        case INCORRECT_ANSWER:
            return <Text style={[s, {color: variables.brandPrimary}]}>INCORRECT</Text>
            break;
        default:
            return <Text></Text>
    }
}
