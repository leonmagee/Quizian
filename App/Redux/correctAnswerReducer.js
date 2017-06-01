import React from 'react';

import {
    START_QUIZ,
    START_NEW_QUIZ,
    CORRECT_ANSWER,
} from './actions';

/**
 * correctAnswerReducer
 * Returns the number of correct chosen answers
 * Set to 0 when quiz is reset or a new quiz is started
 */
export const correctAnswerReducer = (state = 0, action) => {
    switch (action.type) {
        case CORRECT_ANSWER:
            return state + 1;
            break;
        case START_NEW_QUIZ:
            return 0;
            break;
        case START_QUIZ:
            return 0;
            break;
        default:
            return state;
    }
}