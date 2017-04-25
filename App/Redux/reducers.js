import React from 'react';
//import {Text} from 'react-native';
import {combineReducers} from 'redux';
//import styles from '../Styles/DefaultStyles';
//import variables from '../Styles/Variables'

// import {
//     NEXT_QUESTION,
//     QUIZ_RESULTS,
//     START_NEW_QUIZ,
//     ANSWER_SUBMITTED,
//     CORRECT_ANSWER,
//     INCORRECT_ANSWER,
// } from './actions';

/**
 * Import Reducers
 */



import {numberQuestionsReducer} from './numberQuestionsReducer';
import {currentQuestionReducer} from './currentQuestionReducer';
import {correctAnswerReducer} from './correctAnswerReducer';
import {falseAnswerReducer} from './falseAnswerReducer';
import {answerResultStringReducer} from './answerResultStringReducer';
import {answerSubmittedReducer} from './answerSubmittedReducer';
import {quizResultsReducer} from './quizResultsReducer';
import {getQuestionsReducer} from './getQuestionsReducer';


/**
 * Combine State
 * @type {Reducer<S>}
 */
export const reducer = combineReducers({
    numberQuestions: numberQuestionsReducer,
    currentQuestion: currentQuestionReducer,
    correctAnswer: correctAnswerReducer,
    falseAnswer: falseAnswerReducer,
    answerResultString: answerResultStringReducer,
    answerSubmitted: answerSubmittedReducer,
    quizResults: quizResultsReducer,
    getQuestions: getQuestionsReducer,
});
