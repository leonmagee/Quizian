import React from 'react';

import {
    GEOGRAPHY_QUESTION,
} from './actions';

/**
 * geographyIndexReducer
 * track the available questions for the Geography category
 * the initial state is set in QuizWrap
 */
export const geographyIndexReducer = (state = null, action) => {
    switch (action.type) {
        case GEOGRAPHY_QUESTION:
            return action.payload;
            break;
        default:
            return state;
    }
}