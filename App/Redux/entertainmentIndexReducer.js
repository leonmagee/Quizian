import React from 'react';
import {intermediateArray} from '../Utils/helper';
import quizData from '../Data/quizData'

import {
    ENTERTAINMENT_QUESTION,
} from './actions';

/**
 * Get initial data
 */
const cat_keys = intermediateArray(quizData[0].entertainment.length)

/**
 * entertainmentIndexReducer
 * track the available questions for the Entertainment category
 */
export const entertainmentIndexReducer = (state = cat_keys, action) => {
    switch (action.type) {
        case ENTERTAINMENT_QUESTION:
            return action.payload;
            break;
        default:
            return state;
    }
}