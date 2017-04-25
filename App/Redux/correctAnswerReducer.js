import React from 'react';

import {
    START_NEW_QUIZ,
    CORRECT_ANSWER,
} from './actions';

export const correctAnswerReducer = (state = 0, action) => {
    switch (action.type) {
        case CORRECT_ANSWER:
            return state + 1;
            break;
        case START_NEW_QUIZ:
            return 0;
            break;
        default:
            return state;
    }
}