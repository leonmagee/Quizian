import React from 'react'
import variables from './Variables'
import {Dimensions} from 'react-native'

import {
    StyleSheet,
} from 'react-native';

const {width} = Dimensions.get('window')
const button_width = ( width * 0.9 )

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
    },

    topBar: {
        flexDirection: 'row',
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
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        flex: 1,
        top: 0,
        bottom: 0,
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
    },

    questionWrap: {
        backgroundColor: '#FCFCFC',
        marginTop: 19,
        marginBottom: 11,
        paddingVertical: 10, // @todo animate this
        paddingHorizontal: 15,
        borderRadius: 5,
        minHeight: question_height,
        justifyContent: 'center',
        width: button_width,
        shadowColor: '#CCC',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    questionText: {
        fontWeight: 'bold',
        fontSize: question_font_size,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Lalezar',
    },

    answerWrap: {
        backgroundColor: '#FCFCFC',
        marginVertical: 11,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        width: button_width,
        shadowColor: '#CCC',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 1,
        shadowRadius: 0,
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
        color: '#222',
        textAlign: 'center',
        fontFamily: 'Lalezar',
    },
    answerCorrectText: {
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.1)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
    },
    answerIncorrectText: {
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.1)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
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
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },

    categoriesWrap: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoriesBox: {
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
        paddingTop: 15,
        paddingBottom: 10,
    },
    categoriesText: {
        color: '#FFF',
        fontSize: 16,
        backgroundColor: 'transparent',
    },
    catColorOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: variables.brandSecond,
        opacity: 0,
    }

});

module.exports = defaultStyles;