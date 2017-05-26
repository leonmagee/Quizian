import React from 'react';
import {shuffleArray} from '../Utils/helper';
import quizData from '../Data/quizData'

import {
    SPORTS_QUESTION,
} from './actions';

/**
 * Get initial data
 */
const cat_length = quizData[0].sports.length
let cat_key_array = []
for ( let i = 0; i < cat_length; ++i ) {
    cat_key_array.push(i)
}
const cat_keys = shuffleArray(cat_key_array)


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