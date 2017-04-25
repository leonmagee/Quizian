import React from 'react';
import {
    START_DATA,
    DATA_AVAILABLE
} from './actions';


/**
 * Actions to govern data retrieval
 * @param state
 * @param action
 * @returns {boolean}
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