import React from 'react';
import {combineReducers} from 'redux';

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
 * Combine Reducers
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
