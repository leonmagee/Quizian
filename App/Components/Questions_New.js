import React, {Component} from 'react'
import styles from '../Styles/DefaultStyles'
import variables from '../Styles/Variables'
import entities from 'htmlentities';

import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'

const buttonStyles = (correct, answerSubmited, key, answerKey) => {
    if (answerSubmited) {
        if (correct) {
            return styles.answerCorrect
        } else {
            if (key === answerKey) {
                return styles.answerIncorrect
            }
        }
    }
}

const buttonTextStyles = (correct, answerSubmited, key, answerKey) => {
    if (answerSubmited) {
        if (correct) {
            return styles.answerCorrectText
        } else {
            if (key === answerKey) {
                return styles.answerIncorrectText
            }
        }
    }
}

export default class Questions extends Component {

    constructor(props) {
        super(props);
    }

//export const Questions = (props) => (
    render() {
        return (
            <View>
                <View style={[styles.questionWrap, {paddingVertical: this.props.padding}]}>
                    <Text style={styles.questionText}>{entities.decode(this.props.arrayData.question)}</Text>
                </View>
                {this.props.arrayData.answers.map((answer, i) => (
                    <TouchableHighlight
                        style={[styles.answerWrap, buttonStyles(answer.correct, this.props.answerSubmitted, i, this.props.answerKey)]}
                        key={i}
                        underlayColor={variables.brandThirdLite}
                        disabled={this.props.answerSubmitted}
                        onPress={() => this.props.answerChosen(answer.correct, i)}
                    >
                        <Text
                            style={[styles.answerText, buttonTextStyles(answer.correct, this.props.answerSubmitted, i, this.props.answerKey)]}>{entities.decode(answer.answer)}</Text>
                    </TouchableHighlight>
                ))}
            </View>
        )
    }

}