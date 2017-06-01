import React from 'react'

import {
    AsyncStorage,
} from 'react-native'

// try {
//     await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
// } catch (error) {
//     // Error saving data
// }

const awesomeData = {
    name: 'Leon',
    age: 33,
    height: 6.1,
    dl: 7.5,
}

const dataString = JSON.stringify(awesomeData)
console.log(dataString)

const dataRetrive = JSON.parse(dataString)
console.log(dataRetrive)

//const awesomeData = ['Leon', 33, 6.1, 7.5]

const tryer = async () => {

    try {
        AsyncStorage.setItem('@MySuperStore:key', 'I like to save it again???.');
        //AsyncStorage.setItem('@MySuperStore:keyz', awesomeData);
    } catch (error) {
        // Error saving data
    }

    /**
     * '@MySuperStore:key' reflects the entire key
     */

    try {
        // const value = await AsyncStorage.getItem('@MySuperStore:key');
        // if (value !== null) {
        //     // We have data!!
        //     console.log(value);
        // }

        AsyncStorage.getItem('@MySuperStore:key').then((value) => {
            console.log('working without await')
            console.log(value)

        }).done()
        // const valuez = await AsyncStorage.getItem('@MySuperStore:keyz');
        // if (valuez !== null) {
        //     // We have data!!
        //     console.log(valuez);
        // }
    } catch (error) {
        // Error retrieving data
    }
}
tryer()

console.log('data working????');


export const dataStore = {data: 'my data'}