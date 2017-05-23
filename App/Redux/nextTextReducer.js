import React from 'react';

import {
    FINAL_QUESTION,
    QUIZ_RESULTS,
    START_NEW_QUIZ,
} from './actions';

/**
 * nextTextReducer
 * Returns the text for the Next Question button
 */
export const nextTextReducer = (state = 'NEXT QUESTION', action) => {
    switch (action.type) {
        case FINAL_QUESTION:
            return 'RESULTS';
            break;
        case QUIZ_RESULTS:
            return 'NEXT QUESTION';
            break;
        case START_NEW_QUIZ:
            return 'NEXT QUESTION';
            break;
        default:
            return state;
    }
}