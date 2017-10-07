import React, {Component} from 'react';
import {Quiz} from './Quiz'
import {Results} from './Results';
import Stats from './Stats'
import {Categories} from './Categories';
import {connect} from 'react-redux';
import {View, AsyncStorage} from 'react-native';
import {intermediateArray} from '../Utils/helper'
import quizData from '../Data/quizData'
import styles from '../Styles/DefaultStyles'
//import StatusBarSizeIOS from 'react-native-status-bar-size'


/**
 * Height should pull from state?
 */
// let status_height = StatusBarSizeIOS.currentHeight;
// dispatch({type: 'STATUS_BAR_HEIGHT', payload: 77})
// //console.log('QuizWrap', status_height);
// if (status_height) {
//
//     //height = ( height - status_height );
//     //console.log('height new', height);
// }


class _QuizWrap extends Component {

    constructor(props) {
        super(props)

        // let status_height = StatusBarSizeIOS.currentHeight;
        // if (status_height) {
        //     props.statusBarHeightInit(status_height);
        // }
    }

    componentWillMount() {
        //this.testyMcTesterMethod();
        //StatusBarSizeIOS.removeEventListener('willChange', this._handleStatusBarSizeWillChange);
        //StatusBarSizeIOS.removeEventListener('didChange', this.handleStatusBarSizeDidChange);
    }

    // testyMcTesterMethod() {
    //     console.log('this test method is working!');
    //     let currentStatusBarHeight = 60;
    //     this.props.statusBarHeightInit(currentStatusBarHeight);
    // }

    // _handleStatusBarSizeWillChange(nextStatusBarHeight) {
    //     //console.log('Will Change: ' + nextStatusBarHeight);
    // }

    // handleStatusBarSizeDidChange(currentStatusBarHeight) {
    //     //console.log('changed');
    //     //this.setState({currentStatusBarHeight: currentStatusBarHeight});
    //     this.props.statusBarHeightInit(currentStatusBarHeight);
    // }

    componentDidMount() {
        const dataInitArray = [
            {
                data_key: 'sports',
                array_length: quizData[0].sports.length,
                redux_action: this.props.sportsIndexInit,
            },
            {
                data_key: 'history',
                array_length: quizData[0].history.length,
                redux_action: this.props.historyIndexInit
            },
            {
                data_key: 'entertainment',
                array_length: quizData[0].entertainment.length,
                redux_action: this.props.entertainmentIndexInit
            },
            {
                data_key: 'music',
                array_length: quizData[0].music.length,
                redux_action: this.props.musicIndexInit
            },
            {
                data_key: 'geography',
                array_length: quizData[0].geography.length,
                redux_action: this.props.geographyIndexInit
            }
        ]

        dataInitArray.map((item) => {
            AsyncStorage.getItem('@QuestionIndex:' + item.data_key).then((value) => {
                if (value) {
                    const parsedData = JSON.parse(value)
                    item.redux_action(parsedData)
                } else {
                    const cat_keys = intermediateArray(item.array_length)
                    const data = JSON.stringify(cat_keys)
                    AsyncStorage.setItem('@QuestionIndex:' + item.data_key, data)
                    item.redux_action(cat_keys)
                }
            }).done()
        })
        //StatusBarSizeIOS.addEventListener('willChange', this._handleStatusBarSizeWillChange);
        //StatusBarSizeIOS.addEventListener('didChange', this.handleStatusBarSizeDidChange);
    }

    render() {

        if (this.props.statsPage) {
            var mainComponent = <Stats />;
        } else if (this.props.quizResults) {
            var mainComponent = <Results />;
        } else if (this.props.chooseCat) {
            var mainComponent = <Categories />;
        } else {
            var mainComponent = <Quiz />;
        }

        return (
            <View style={styles.outerWrapMain}>
                {mainComponent}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    statsPage: state.statsPage,
    quizResults: state.quizResults,
    chooseCat: state.chooseCat,
})

const mapActionsToProps = (dispatch) => ({
    sportsIndexInit(array) {
        dispatch({type: 'SPORTS_QUESTION', payload: array})
    },
    musicIndexInit(array) {
        dispatch({type: 'MUSIC_QUESTION', payload: array})
    },
    historyIndexInit(array) {
        dispatch({type: 'HISTORY_QUESTION', payload: array})
    },
    geographyIndexInit(array) {
        dispatch({type: 'GEOGRAPHY_QUESTION', payload: array})
    },
    entertainmentIndexInit(array) {
        dispatch({type: 'ENTERTAINMENT_QUESTION', payload: array})
    },
    // statusBarHeightInit(value) {
    //     dispatch({type: 'STATUS_BAR_HEIGHT', payload: value})
    // }
})

export const QuizWrap = connect(mapStateToProps, mapActionsToProps)(_QuizWrap);
