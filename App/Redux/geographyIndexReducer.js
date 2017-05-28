import React from 'react';
import {intermediateArray} from '../Utils/helper';
import quizData from '../Data/quizData'

import {
    GEOGRAPHY_QUESTION,
} from './actions';

/**
 * Get initial data
 */
// const cat_length = quizData[0].geography.length
// let cat_key_array = []
// for ( let i = 0; i < cat_length; ++i ) {
//     cat_key_array.push(i)
// }
// const cat_keys = shuffleArray(cat_key_array)

const cat_keys = intermediateArray(quizData[0].geography.length)


/**
 * geographyIndexReducer
 * track the available questions for the Geography category
 */
export const geographyIndexReducer = (state = cat_keys, action) => {
    switch (action.type) {
        case GEOGRAPHY_QUESTION:
            return action.payload;
            break;
        default:
            return state;
    }
}