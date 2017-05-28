import React from 'react';

import {
    CAT_CHOSEN,
    NEW_CAT,
    START_NEW_QUIZ,
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
        case START_NEW_QUIZ:
            return true;
            break;
        default:
            return state;
    }
}