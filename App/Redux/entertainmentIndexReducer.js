import React from 'react';
import {shuffleArray} from '../Utils/helper';
import quizData from '../Data/quizData'

import {
    ENTERTAINMENT_QUESTION,
} from './actions';

/**
 * Get initial data
 */
const cat_length = quizData[0].entertainment.length
let cat_key_array = []
for ( let i = 0; i < cat_length; ++i ) {
    cat_key_array.push(i)
}
const cat_keys = shuffleArray(cat_key_array)


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