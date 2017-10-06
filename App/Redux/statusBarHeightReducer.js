import React from 'react';

import {
    STATUS_BAR_HEIGHT,
    STATUS_BAR_HEIGHT_CHANGE,
} from './actions';

/**
 * statusBarHeightReducer
 * returns the current status bar height
 * the status bar height is actually 20, but here we will treat the default value as 0
 * the 'Hot Spot' dialogue adds +20 to the height
 */
export const statusBarHeightReducer = (state = 0, action) => {
    switch (action.type) {
        case STATUS_BAR_HEIGHT:
            return action.payload;
            break;
        case STATUS_BAR_HEIGHT_CHANGE:
            return action.payload;
            break;
        default:
            return state;
    }
}