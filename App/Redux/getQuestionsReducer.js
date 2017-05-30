import React from 'react';
import {
    START_DATA,
    DATA_AVAILABLE
} from './actions';

/**
 * getQuestionsReducer
 * returns one question object in the correct category
 */
export const getQuestionsReducer = (state = false, action) => {

    switch( action.type ) {
        case START_DATA:
            return false;
            break;
        case DATA_AVAILABLE:
            return action.payload;
            break;
        default:
            return state;
    }
}