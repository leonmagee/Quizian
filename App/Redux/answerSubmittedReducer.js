import React from 'react';

import {
    NEXT_QUESTION,
    START_NEW_QUIZ,
    ANSWER_SUBMITTED,
    RESET_QUIZ,
} from './actions';

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
        case RESET_QUIZ:
            return false;
            break;
        default:
            return state;
    }
}