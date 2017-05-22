import React from 'react';

import {
    START_NEW_QUIZ,
    INCORRECT_ANSWER,
} from './actions';

/**
 * falseAnswerReducer
 * Returns the number of incorrect chosen answers
 * Set to 0 when quiz is reset or a new quiz is started
 */
export const falseAnswerReducer = (state = 0, action) => {
    switch (action.type) {
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