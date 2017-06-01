import React from 'react';

import {
    NEXT_QUESTION,
    START_QUIZ,
    START_NEW_QUIZ,
} from './actions';

/**
 * currentQuestionReducer
 * Returns the current question index
 * Increments the index when 'Next Question' is selected
 * Resets value to 0 when quiz is restarted
 */
export const currentQuestionReducer = (state = 0, action) => {

    switch (action.type) {
        case NEXT_QUESTION:
            return state + 1;
            break;
        case START_QUIZ:
            return 0
            break;
        case START_NEW_QUIZ:
            return 0
            break;
        default:
            return state;
    }
};

