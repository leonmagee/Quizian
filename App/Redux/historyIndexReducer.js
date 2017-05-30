import React from 'react';
import {intermediateArray} from '../Utils/helper';
import quizData from '../Data/quizData'

import {
    HISTORY_QUESTION,
} from './actions';

/**
 * Get initial data
 */
const cat_keys = intermediateArray(quizData[0].history.length)

/**
 * historyIndexReducer
 * track the available questions for the History category
 * ideally you don't want this to reset when you reset the quiz or go to the next batch of questions,
 * it should only reset when you run out of questions
 */
export const historyIndexReducer = (state = cat_keys, action) => {
    switch (action.type) {
        case HISTORY_QUESTION:
            return action.payload;
            break;
        default:
            return state;
    }
}