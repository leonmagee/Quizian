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

const {width, height} = Dimensions.get('window')
const button_width = ( width * 0.9 )

// console.log(width);
// console.log(height);

if ( width < 321 ) {
    var question_font_size = 16;
    var question_height = 110;
} else {
    var question_font_size = 22;
    var question_height = 150;
}



const defaultStyles = StyleSheet.create({
    outerWrapMain: { // wraps everything
        flex: 1,
    },
    outerWrap: {
        flex: 1,
        //backgroundColor: 'rgba(32,178,170,0.10)',
    },

    topBar: {
        //height: 80,
        flexDirection: 'row',
        //alignItems: 'flex-end',
        justifyContent: 'space-around',
    },

    topBarTimer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: 25,
        height: 80,
        width: 120,
        flexDirection: 'row',
    },
    topBarTimerText: {
        fontSize: 46,
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: 'transparent',
    },

    topBarDetails: {
        height: 80,
        justifyContent: 'flex-end',
        paddingLeft: 15,
    },
    topBarDetailsText: {
        fontSize: 17,
        lineHeight: 23,
        fontWeight: 'bold',
        color: '#FFF',
        fontFamily: 'Lalezar',
        backgroundColor: 'transparent',
    },
    correctIncorrectWrap: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#FFF',
        //borderRadius: 5,
        //borderWidth: 3,
        //borderColor: '#222',
        position: 'absolute',
        //width: 150,
        top: 85,
        right: 0,
        left: 0,
    },
    correctIncorrectText: {
        fontWeight: 'bold',
        fontFamily: 'Lalezar',
        fontSize: 50,
        backgroundColor: 'transparent',
        textShadowColor: '#CCC',
        textShadowOffset: {width: 3, height: 3},
    },

    quizWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingBottom: 15,
        //backgroundColor: 'blue',
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
        minHeight: question_height,
        justifyContent: 'center',
        //borderColor: variables.brandThirdLite,
        //borderColor: 'rgba(0,0,0,0.1)',
        //borderColor: '#BBB',
        //borderWidth: 1,
        width: button_width
    },
    questionText: {
        fontWeight: 'bold',
        fontSize: question_font_size,
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
        //backgroundColor: 'rgba(255,255,255,0.2)',
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },

});

module.exports = defaultStyles;