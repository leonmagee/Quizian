import React from 'react';

import {
    NEXT_QUESTION,
    START_NEW_QUIZ,
    ANSWER_SUBMITTED,
    TIMER_EXPIRES,
    START_QUIZ,
    QUIZ_RESET,
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
        case TIMER_EXPIRES:
            return true;
            break;
        case NEXT_QUESTION:
            return false;
            break;
        case START_NEW_QUIZ:
            return false;
            break;
        case START_QUIZ:
            return false;
            break;
        case QUIZ_RESET:
            return false;
            break;
        default:
            return state;
    }
}