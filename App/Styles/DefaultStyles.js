/**
 * @todo use more descriptive terminology here
 * @todo it should be obvious what each style applies to
 */

import React from 'react'
import variables from './Variables'
//import {Dimensions} from 'react-native'

import {
    StyleSheet,
} from 'react-native';

//const {width} = Dimensions.get('window')
//const button_width = ( width * 0.9 )
//const button_width = ( width * 0.9 )
// @todo animate the button width?

const defaultStyles = StyleSheet.create({
    outerWrapMain: { // wraps everything
        flex: 1,
    },
    outerWrap: {
        flex: 1,
        backgroundColor: 'rgba(32,178,170,0.10)',
    },

    headerWrap: {
        height: 125,
        paddingHorizontal: 5,
        paddingTop: 45,
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        padding: 3,
        fontWeight: 'bold',
        color: '#333'
    },
    correctIncorrectWrap: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    correctIncorrectText: {
        fontWeight: 'bold',
        fontSize: 25,
    },

    quizWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },

    // questionComponentOuter: {
    //     backgroundColor: 'red',
    //     justifyContent: 'flex-end',
    // },

    questionWrap: {
        backgroundColor: '#FCFCFC',
        marginTop: 15,
        marginBottom: 15,
        paddingVertical: 10, // @todo animate this
        paddingHorizontal: 15,
        borderRadius: 5,
        borderColor: variables.brandThirdLite,
        borderWidth: 3,
        //width: button_width
    },
    questionText: {
        fontWeight: 'bold',
        fontSize: 17,
        color: variables.brandThird,
        textAlign: 'center',
    },

    answerWrap: {
        backgroundColor: '#FCFCFC',
        marginVertical: 15,
        //marginHorizontal: 85,
        paddingVertical: 10, // @todo animate this
        paddingHorizontal: 15,
        borderRadius: 5,
        borderColor: variables.brandThirdLite,
        borderWidth: 1,
        //width: button_width
    },
    answerCorrect: {
        backgroundColor: variables.brandSecond,
        borderColor: variables.brandSecond,
    },
    answerIncorrect: {
        backgroundColor: variables.brandPrimary,
        borderColor: variables.brandPrimary,
    },
    answerText: {
        fontWeight: 'bold',
        fontSize: 17,
        color: variables.brandThird,
        textAlign: 'center',
    },
    answerCorrectText: {
        color: 'white',
    },
    answerIncorrectText: {
        color: 'white',
    },

    footerWrap: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    nextButton: {
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        width: 200,
        backgroundColor: variables.brandThird,
        alignItems: 'center',
    },
    nextButtonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
    },

    quizResultsWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quizResultsHeaderText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: variables.brandPrimary,
    },
    quizResultsTextWrap: {
        paddingBottom: 13,
    },
    quizResultsText: { // text in header
        textAlign: 'center',
        padding: 3,
        fontWeight: 'bold',
        color: '#333',
        fontSize: 15,
    },
    pieChartWrap: {
        paddingVertical: 30,
    },

    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
    },

});

module.exports = defaultStyles;