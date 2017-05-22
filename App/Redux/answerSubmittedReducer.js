import React from 'react';

import {
    NEXT_QUESTION,
    START_NEW_QUIZ,
    ANSWER_SUBMITTED,
} from './actions';

/**
 * answerSubmittedReducer
 * Returns true right after and answer has been submitted
 * Rest to false when the quiz is reset or next question is begun
 */
export const answerSubmittedReducer = (state = false, action) => {
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