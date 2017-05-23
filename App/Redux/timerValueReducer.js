import React from 'react';

import {
    NEXT_QUESTION,
    TIMER_TICK,
    START_NEW_QUIZ,
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
            return state - 1;
            break;
        case START_NEW_QUIZ:
            return 15;
            break;
        default:
            return state;
    }
}