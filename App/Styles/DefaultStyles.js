/**
 * @todo use more descriptive terminology here
 * @todo it should be obvious what each style applies to
 */

import React from 'react'
import variables from './Variables'
import {Dimensions} from 'react-native'

import {
    StyleSheet,
} from 'react-native';

const {width} = Dimensions.get('window')
const button_width = ( width * 0.9 )

const defaultStyles = StyleSheet.create({
    outerWrapMain: { // wraps everything
        flex: 1,
    },
    outerWrap: {
        flex: 1,
        //backgroundColor: 'rgba(32,178,170,0.10)',
    },

    topBar: {
        height: 70,
        justifyContent: 'center',
    },
    topBarText: {
        color: '#FFF',
        fontFamily: 'Lalezar',
        backgroundColor: 'transparent',
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
        color: '#EEE',
        backgroundColor: 'transparent',
    },
    correctIncorrectWrap: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    correctIncorrectText: {
        fontWeight: 'bold',
        fontSize: 25,
        backgroundColor: 'transparent',
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
        minHeight: 150,
        justifyContent: 'center',
        //borderColor: variables.brandThirdLite,
        //borderColor: 'rgba(0,0,0,0.1)',
        //borderColor: '#BBB',
        //borderWidth: 1,
        width: button_width
    },
    questionText: {
        fontWeight: 'bold',
        fontSize: 22,
        //color: variables.brandThird,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Lalezar',
    },

    answerWrap: {
        backgroundColor: '#FCFCFC',
        marginVertical: 15,
        //marginHorizontal: 85,
        paddingVertical: 10, // @todo animate this
        paddingHorizontal: 15,
        borderRadius: 5,
        //borderColor: variables.brandThirdLite,
        //borderWidth: 1,
        width: button_width
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
        fontSize: 18,
        //color: variables.brandThird,
        color: '#222',
        textAlign: 'center',
        fontFamily: 'Lalezar',
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
        color: '#FFF',
        backgroundColor: 'transparent',
    },
    quizResultsTextWrap: {
        paddingBottom: 13,
    },
    quizResultsText: { // text in header
        textAlign: 'center',
        padding: 3,
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 15,
        backgroundColor: 'transparent',
    },
    pieChartWrap: {
        paddingVertical: 30,
    },

    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
    },

    menuBar: {
        height: 50,
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },

});

module.exports = defaultStyles;