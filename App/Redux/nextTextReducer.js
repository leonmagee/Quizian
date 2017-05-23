import React from 'react';

import {
    START_NEW_QUIZ,
    CORRECT_ANSWER,
} from './actions';

/**
 * nextTextReducer
 * Returns the text for the Next Question button
 */
export const nextTextReducer = (state = 'NEXT QUESTION', action) => {
    switch (action.type) {
        case CORRECT_ANSWER:
            return 'RESULTS';
            break;
        case START_NEW_QUIZ:
            return 'NEXT QUESTION';
            break;
        default:
            return state;
    }
}