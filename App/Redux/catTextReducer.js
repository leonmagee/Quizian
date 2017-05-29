import React from 'react';

import {
    CAT_CHOSEN,
} from './actions';

/**
 * nextTextReducer
 * Returns the text for the Next Question button
 */
export const catTextReducer = (state = '', action) => {
    if ( action.type === CAT_CHOSEN ) {
        if ( action.payload === 'sports' ) {
            state = 'SPORTS'
        } else if ( action.payload === 'entertainment' ) {
            state = 'TV & MOVIES'
        } else if ( action.payload === 'music') {
            state = 'MUSIC'
        } else if ( action.payload === 'geography' ) {
            state = 'GEOGRAPHY'
        } else if ( action.payload === 'history') {
            state = 'HISTORY'
        }
    }
    return state
}