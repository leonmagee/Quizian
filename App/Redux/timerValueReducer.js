import React from 'react';

import {
    NEXT_QUESTION,
    TIMER_TICK,
} from './actions';

/**
 * timerValueReducer
 * Returns the value of the timer
 * Set to 15 when next question is loaded
 */
export const timerValueReducer = (state = 15, action) => {
    switch (action.type) {
        case NEXT_QUESTION:
            return 15;
            break;
        case TIMER_TICK:
            return state -1;
            break;
        default:
            return state;
    }
}