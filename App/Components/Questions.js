import React from 'react'
import styles from '../Styles/DefaultStyles'
import variables from '../Styles/Variables'
import entities from 'htmlentities';

import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'

const buttonStyles = (correct, answerSubmited, key, answerKey) => {
    //console.log('correct:', correct);
    //console.log('answerSubmited:', answerSubmited);
    console.log('key:', key);
    console.log(answerKey);
    if ( answerSubmited ) {
        if (correct) {
            return styles.answerCorrect
        } else {
            return styles.answerIncorrect
        }
    }
}

const buttonTextStyles = (correct, answerSubmited) => {
    if ( answerSubmited ) {
        if (correct) {
            return styles.answerCorrectText
        } else {
            return styles.answerIncorrectText
        }
    }
}

export const Questions = (props) => (
    <View>
        <View style={styles.questionWrap}>
            <Text style={styles.questionText}>{entities.decode(props.arrayData.question)}</Text>
        </View>
        {props.arrayData.answers.map((answer, i) => (
            <TouchableHighlight
                style={[styles.answerWrap, buttonStyles(answer.correct, props.answerSubmitted, i, props.answerKey)]} key={i}
                underlayColor={variables.brandThirdLite}
                disabled={props.answerSubmitted}
                onPress={() => props.answerChosen(answer.correct, i)}
            >
                <Text style={[styles.answerText, buttonTextStyles(answer.correct, props.answerSubmitted)]}>{entities.decode(answer.answer)}</Text>
            </TouchableHighlight>
        ))}
    </View>
);