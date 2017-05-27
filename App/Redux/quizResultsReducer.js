import React from 'react';

import {
    QUIZ_RESULTS,
    START_NEW_QUIZ,
} from './actions';

/**
 * quizResultsReducer
 * toggles displaying the quiz results component
 * used in QuizWrap.js
 */
export const quizResultsReducer = (state = false, action) => {
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