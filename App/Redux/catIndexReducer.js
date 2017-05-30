import React from 'react';

import {
    SET_CAT_INDEX,
} from './actions';

/**
 * catIndexReducer
 * returns the index array of the currently chosen category
 * @todo needs to be tested once data is being saved - test with small data set
 */
export const catIndexReducer = (state = false, action) => {
    switch (action.type) {
        case SET_CAT_INDEX:
            return action.payload;
            break;
        default:
            return state;
    }
}