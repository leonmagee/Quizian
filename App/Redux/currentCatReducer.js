import React from 'react';

import {
    CAT_CHOSEN,
} from './actions';

/**
 * currentCatReducer
 * returns the currently selected category
 */
export const currentCatReducer = (state = 'history', action) => {
    switch (action.type) {
        case CAT_CHOSEN:
            return action.payload;
            //return 'history';
            break;
        default:
            return state;
    }
}