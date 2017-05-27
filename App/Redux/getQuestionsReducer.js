import React from 'react';
import {
    START_DATA,
    DATA_AVAILABLE
} from './actions';

/**
 * getQuestionsReducer
 * returns one question object in the correct category
 * @todo used to return data queried from API - array of objects
 * @todo do I really need this reducer - the data is automatically available but I can retrieve the data from here
 * @todo and use a different reducer to choose which data to store here?
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