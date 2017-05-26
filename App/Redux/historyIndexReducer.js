import React from 'react';

import {
    HISTORY_QUESTION,
} from './actions';

/**
 * historyIndexReducer
 * track the available questions for the History category
 */
export const historyIndexReducer = (state = [], action) => {
    switch (action.type) {
        case FINAL_QUESTION:
            return 'RESULTS';
            break;
        default:
            return state;
    }
}