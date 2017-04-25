import React from 'react';
import {Text} from 'react-native';
import {combineReducers} from 'redux';
import styles from '../Styles/DefaultStyles';
import variables from '../Styles/Variables'
import {SampleQuestions} from '../Data/SampleQuestions'
import {
    NEXT_QUESTION,
    QUIZ_RESULTS,
    START_NEW_QUIZ,
    ANSWER_SUBMITTED,
    CORRECT_ANSWER,
    INCORRECT_ANSWER,
    START_DATA,
    DATA_AVAILABLE
} from './actions';

import {getQuestionsReducer} from './getQuestionsReducer';

//var arrayData = SampleQuestions[this.props.currentQuestion];

// const getQuestionsReducer = (state = false, action) => {
//
//     switch( action.type ) {
//         case START_DATA:
//             return false;
//             break;
//         case DATA_AVAILABLE:
//             return action.payload;
//             break;
//         default:
//             return state;
//     }
// }

/**
 * Total Number of Questions
 * Defined in store init
 * @param state
 * @returns {*}
 */
const numberQuestionsReducer = (state = 0) => {
    return state;
}

const correctAnswerReducer = (state = 0, action) => {
    switch (action.type) {
        case CORRECT_ANSWER:
            return state + 1;
            break;
        case START_NEW_QUIZ:
            return 0;
            break;
        default:
            return state;
    }
}

const falseAnswerReducer = (state = 0, action) => {
    switch (action.type) {
        // case INCORRECT_ANSWER:
        //     throw new Error('XXXXXX')
        //     break;
        case INCORRECT_ANSWER:
            return state + 1;
            break;
        case START_NEW_QUIZ:
            return 0;
            break;
        default:
            return state;
    }
}

const answerSubmittedReducer = (state = false, action) => {
    switch (action.type) {
        case ANSWER_SUBMITTED:
            return true;
            break;
        case NEXT_QUESTION:
            return false;
            break;
        case START_NEW_QUIZ:
            return false;
            break;
        default:
            return state;
    }
}

const quizResultsReducer = (state = false, action) => {
    switch (action.type) {
        case QUIZ_RESULTS:
            return true;
            break;
        case START_NEW_QUIZ:
            return false;
            break;
        default:
            return state;
    }
}

const answerResultStringReducer = (state = '', action) => {
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


/**
 * Return current question index
 * @param state
 * @param action
 * @returns {*}
 */
const currentQuestionReducer = (state = 0, action) => {

    switch (action.type) {
        case NEXT_QUESTION:
            return state + 1;
            break;
        case START_NEW_QUIZ:
            return 0
            break;
        default:
            return state;
    }
};


/**
 * Combine State
 * @type {Reducer<S>}
 */
export const reducer = combineReducers({
    currentQuestion: currentQuestionReducer,
    numberQuestions: numberQuestionsReducer,
    correctAnswer: correctAnswerReducer,
    falseAnswer: falseAnswerReducer,
    answerResultString: answerResultStringReducer,
    answerSubmitted: answerSubmittedReducer,
    quizResults: quizResultsReducer,
    getQuestions: getQuestionsReducer,
});
