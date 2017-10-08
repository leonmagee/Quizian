import React from 'react';

import {
    CREDITS_PAGE,
    STATS_PAGE,
    START_QUIZ,
    QUIZ_RESET,
} from './actions';

/**
 * statsPageReducer
 * toggles stats page
 */
export const creditsPageReducer = (state = false, action) => {
    switch (action.type) {
        case CREDITS_PAGE:
            return true;
            break;
        case STATS_PAGE:
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