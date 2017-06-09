import React from 'react';

import {
    STATS_PAGE,
    START_QUIZ,
    QUIZ_RESET,
} from './actions';

/**
 * statsPageReducer
 * toggles stats page
 */
export const statsPageReducer = (state = false, action) => {
    switch (action.type) {
        case STATS_PAGE:
            return true;
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