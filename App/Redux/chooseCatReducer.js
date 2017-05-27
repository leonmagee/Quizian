import React from 'react';

import {
    CAT_CHOSEN,
    NEW_CAT,
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
        case NEW_CAT:
            return true;
            break;
        default:
            return state;
    }
}