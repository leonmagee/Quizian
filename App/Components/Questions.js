import React from 'react'
import styles from '../Styles/DefaultStyles'
import variables from '../Styles/Variables'
//import entities from 'htmlentities';

import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native'

const questionStyle = (answerSubmitted) => {
    if (answerSubmitted) {
        return styles.answerQuestionGray
    }
}

const buttonStyles = (correct, answerSubmitted, key, answerKey) => {
    if (answerSubmitted) {
        if (correct) {
            return styles.answerCorrect
        } else {
            if (key === answerKey) {
                return styles.answerIncorrect
            } else {
                return styles.answerQuestionGray
            }
        }
    }
}

const buttonTextStyles = (correct, answerSubmitted, key, answerKey) => {
    if (answerSubmitted) {
        if (correct) {
            return styles.answerCorrectText
        } else {
            if (key === answerKey) {
                return styles.answerIncorrectText
            }
        }
    }
}

const removeBackSlashes = (input) => {
    return input.replace(/\\/g, '');
}

export const Questions = (props) => (
    <View>
        <View style={[styles.questionWrap, questionStyle(props.answerSubmitted)]}>
            <Text style={styles.questionText}>{removeBackSlashes(props.arrayData.question)}</Text>
            <View style={styles.correctIncorrectWrap}>
                {props.correctIncorrectString}
            </View>
        </View>
        {props.arrayData.answers.map((answer, i) => (
            <TouchableHighlight
                style={[styles.answerWrap, buttonStyles(answer.correct, props.answerSubmitted, i, props.answerKey)]}
                key={i}
                underlayColor={variables.brandThirdLite}
                disabled={props.answerSubmitted}
                onPress={() => props.answerChosen(answer.correct, i)}
            >
                <Text
                    style={[styles.answerText, buttonTextStyles(answer.correct, props.answerSubmitted, i, props.answerKey)]}>{removeBackSlashes(answer.answer)}</Text>
            </TouchableHighlight>
        ))}
    </View>
);