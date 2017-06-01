import React from 'react';

import {
    START_QUIZ,
    QUIZ_RESET,
} from './actions';

/**
 * quizStartedReducer
 * toggles quiz being started
 */
export const quizStartedReducer = (state = false, action) => {
    switch (action.type) {
        case START_QUIZ:
            return true;
            break;
        case QUIZ_RESET:
            return false;
            break;
        default:
            return state;
    }
}