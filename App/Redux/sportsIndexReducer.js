import React from 'react'
import {intermediateArray} from '../Utils/helper'
import quizData from '../Data/quizData'
import {AsyncStorage} from 'react-native'

import {
    SPORTS_QUESTION,
} from './actions';

/**
 * Get initial data
 * @todo when this sets the inital data it shoudl first check to see if there is an AsyncStorage strinified object saved anywhere?
 * @todo this might need to be outside of the reducer file???
 * @todo refactor this to be a function that will work for each index type reducer
 */

const cat_keys = intermediateArray(quizData[0].sports.length)
//const string_cheese = JSON.stringify(cat_keys)
//console.log( 'stingerz', string_cheese)

const newData = getAsyncIndex('sports', cat_keys)
console.log('New?', newData)

const key = 'sports'

const final_data = AsyncStorage.getItem('@QuestionIndex:' + key).then((value) => {
    if (value) {
        return JSON.parse(value)
    } else {
        const data = JSON.stringify(cat_keys)
        console.log('no data like that exists yet...')
        AsyncStorage.setItem('@QuestionIndex:' + key, data)
        return cat_keys
    }

}).done(() => {
    console.log( 'everything is done!')
})

console.log('Finally!!!', final_data)


// try {
//     AsyncStorage.setItem('@MySuperStore:key', 'I like to save it again???.');
//     //AsyncStorage.setItem('@MySuperStore:keyz', awesomeData);
// } catch (error) {
//     // Error saving data
// }


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