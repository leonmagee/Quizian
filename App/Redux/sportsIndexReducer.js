import React from 'react';
import {intermediateArray} from '../Utils/helper';
import quizData from '../Data/quizData'

import {
    SPORTS_QUESTION,
} from './actions';

/**
 * Get initial data
 */
const cat_keys = intermediateArray(quizData[0].sports.length)

/**
 * sportsIndexReducer
 * track the available questions for the Sports category
 */
export const sportsIndexReducer = (state = cat_keys, action) => {
    switch (action.type) {
        case SPORTS_QUESTION:
            return action.payload;
            break;
        default:
            return state;
    }
}