import React from 'react';

import {
    HISTORY_QUESTION,
    SPORTS_QUESTION,
    ENTERTAINMENT_QUESTION,
    MUSIC_QUESTION,
    GEOGRAPHY_QUESTION
} from './actions';

/**
 * nextTextReducer
 * Returns the text for the Next Question button
 */
export const catTextReducer = (state = '', action) => {
    switch (action.type) {
        case HISTORY_QUESTION:
            return 'HISTORY';
            break;
        case SPORTS_QUESTION:
            return 'SPORTS';
            break;
        case ENTERTAINMENT_QUESTION:
            return 'TV & MOVIES';
            break;
        case MUSIC_QUESTION:
            return 'MUSIC';
            break;
        case GEOGRAPHY_QUESTION:
            return 'GEOGRAPHY';
            break;
        default:
            return state;
    }
}