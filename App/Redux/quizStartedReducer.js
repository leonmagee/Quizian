import React from 'react';

import {
    QUIZ_RESET,
} from './actions';

/**
 * quizStartedReducer
 * toggles quiz being started
 */
export const quizStartedReducer = (state = false, action) => {
    switch (action.type) {
        case QUIZ_RESET:
            return true;
            break;
        default:
            return state;
    }
}