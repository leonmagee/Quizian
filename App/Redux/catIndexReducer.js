import React from 'react';

import {
    SET_CAT_INDEX,
} from './actions';

/**
 * catIndexReducer
 * returns the index array of the currently chosen category
 * @todo NOT WORKING NOW???
 * @todo does this need to be set to false?
 * @todo test this with smaller array of data? - create some test data where it's just two questions of each, so you
 * @todo will know that it takes things in the correct order...
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