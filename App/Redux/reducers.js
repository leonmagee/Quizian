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
import {answerKeyReducer} from './answerKeyReducer';
import {quizResultsReducer} from './quizResultsReducer';
import {getQuestionsReducer} from './getQuestionsReducer';
//import {resetQuizReducer} from './resetQuizReducer';
//import {fadeQuizReducer} from './fadeQuizReducer';


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
    answerKey: answerKeyReducer,
    quizResults: quizResultsReducer,
    getQuestions: getQuestionsReducer,
    //resetQuiz: resetQuizReducer,
    //fadeQuiz: fadeQuizReducer,
});
