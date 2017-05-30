import React from 'react';
import {intermediateArray} from '../Utils/helper';
import quizData from '../Data/quizData'

import {
    MUSIC_QUESTION,
} from './actions';

/**
 * Get initial data
 */
const cat_keys = intermediateArray(quizData[0].music.length)

/**
 * musicIndexReducer
 * track the available questions for the Music category
 */
export const musicIndexReducer = (state = cat_keys, action) => {
    switch (action.type) {
        case MUSIC_QUESTION:
            return action.payload;
            break;
        default:
            return state;
    }
}