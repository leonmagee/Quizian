import React from 'react'
import {AsyncStorage} from 'react-native'

/**
 * Helper Functions
 */

/**
 * Return a shuffled array
 * @param array
 * @returns {*}
 */
export const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export const intermediateArray = (length) => {
    let cat_key_array = []
    for (let i = 0; i < length; ++i) {
        cat_key_array.push(i)
    }
    return shuffleArray(cat_key_array)
}

// export const getAsyncIndex = (key, init_val) => {
//
//     AsyncStorage.getItem('@QuestionIndex:' + key).then((value) => {
//         if ( value ) {
//             return JSON.parse(value)
//         } else {
//             const data = JSON.stringify(init_val)
//             console.log('no data like that exists yet...')
//             AsyncStorage.setItem('@QuestionIndex:' + key, data)
//         }
//
//     }).done()
//
// }