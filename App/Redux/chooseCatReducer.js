import React from 'react';

import {
    CAT_CHOSEN,
} from './actions';

/**
 * chooseCatReducer
 * toggles the choose cat page
 */
export const chooseCatReducer = (state = true, action) => {
    switch (action.type) {
        case CAT_CHOSEN:
            return false;
            break;
        default:
            return state;
    }
}