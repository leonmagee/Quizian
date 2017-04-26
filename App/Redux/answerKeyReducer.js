import React from 'react';

import {
    NEXT_QUESTION,
    START_NEW_QUIZ,
    ANSWER_KEY,
} from './actions';

export const answerKeyReducer = (state = null, action) => {
    switch (action.type) {
        case ANSWER_KEY:
            return action.payload;
            break;
        case NEXT_QUESTION:
            return null;
            break;
        case START_NEW_QUIZ:
            return null;
            break;
        default:
            return state;
    }
}