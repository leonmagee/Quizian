import React from 'react';

import {
    STATS_PAGE,
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
        // case QUIZ_RESET:
        //     return false;
        //     break;
        default:
            return state;
    }
}