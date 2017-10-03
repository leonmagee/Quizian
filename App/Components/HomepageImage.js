import React, {Component} from 'react'
import {connect} from 'react-redux'
import {shuffleArray, vw, vh} from '../Utils/helper'
import {QuizWrap} from './QuizWrap'
import Stats from './Stats'
import StartQuizButton from './StartQuizButton'
import variables from '../Styles/Variables'

import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

let {width, height} = Dimensions.get('window')
height = height - 50; // make space for bottom menu bar


const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null, // allows centering of content with image - otherwise image width is imported
        height: null,
    },
    mainOuterWrap: {
        flex: 1,
        width: width,
    },
    homeWrapOuter: {
        flex: 1,
    },
    homeWrap: {
        flex: 1,
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
    },
    homeTextWrap: {
        position: 'absolute',
        zIndex: 333,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeText: {
        color: 'rgba(255,255,255,1)',
        fontSize: 15 * vw,
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 1, height: 1},
        fontFamily: 'Lalezar',
    },
    // gridItem: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     margin: 1,
    // },
    // questionText: {
    //     fontSize: 70,
    //     fontWeight: 'bold',
    //     color: '#FFF',
    //     opacity: 0,
    // },
    menuText: {
        fontSize: 27,
        fontFamily: 'Lalezar',
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: 'transparent',
    },
    menuBar: {
        position: 'absolute',
        height: 50,
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        bottom: 0,
        width: width,
    },
});

class HomepageImage extends Component {

    constructor(props) {
        super(props);


        this.state = {
            //started: false,
            // grid_array: grid_array,
            // shuffled_grid_array: shuffled_grid_array,
            // grid_styles_array: grid_styles_array,
            // item_width: item_width,
            // item_height: item_height,
        }
    }

    componentWillMount() {

    }


    componentDidMount() {

    }


    render() {


        return (
            <View style={styles.mainOuterWrap}>

                <View style={styles.homeWrapOuter}>

                    <View style={styles.homeWrap}>
                        <Image source={require('../Assets/Images/home-image.png')}
                               style={styles.imageContainer}></Image>
                        <View style={[styles.homeTextWrap, {width: width, height: height}]}>
                            <Text style={styles.homeText}>Quizian</Text>
                        </View>
                        <View style={styles.menuBar}>
                            <StartQuizButton handleClick={() => this.props.startQuiz()} buttonText="NEW GAME"/>
                            <StartQuizButton handleClick={() => this.props.goToStats()} buttonText="STATS"/>
                        </View>
                    </View>

                </View>


            </View>
        )
    }
}

mapStateToProps = (state) => ({
    quizStarted: state.quizStarted,
    statsPage: state.statsPage,
})

mapActionsToProps = (dispatch) => ({
    startQuiz() {
        dispatch({type: 'START_QUIZ'})
    },
    goToStats() {
        dispatch({type: 'STATS_PAGE'})
    }
})

module.exports = connect(mapStateToProps, mapActionsToProps)(HomepageImage)