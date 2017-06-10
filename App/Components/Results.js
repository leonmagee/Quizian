import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {connect} from 'react-redux'
import StatsButton from './StatsButton'

import {
    View,
    Text,
    StyleSheet,
    Animated,
    Dimensions,
} from 'react-native'

let {width} = Dimensions.get('window')
let wrapWidth = width * 0.8
let wrapMargin = width * 0.1
let gradientWidth = width * 0.33
let mainBackground = '#FCFCFC'

const LinearAnimate = Animated.createAnimatedComponent(LinearGradient)


const styles = new StyleSheet.create({
    outerWrap: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: mainBackground,
    },
    headerWrap: {
        backgroundColor: mainBackground,
        paddingTop: 50,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 26,
        color: '#111',
        fontWeight: 'bold',
    },
    headerText2: {
        fontSize: 12,
        color: '#555',
        fontWeight: 'bold',
        paddingTop: 8,
    },
    graphWrap: {
        flex: 1,
        backgroundColor: mainBackground,
        width: wrapWidth,
        margin: wrapMargin,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    barItemWrap: {
        margin: 10,
        alignItems: 'center',
    },
    barGradient: {
        width: gradientWidth,
    },
    labelWrap: {
        backgroundColor: mainBackground,
        paddingTop: 10,
        alignItems: 'center',
    },
    labelText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#111',
    },
    menuBar: {
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: mainBackground,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
})

const gradients = [
    [
        '#1ff879',
        '#04E762',
    ],
    [
        '#fe6e53',
        '#FC5130',
    ],
]


class _Results extends Component {

    constructor(props) {
        super(props)

        const correctHeight = props.correctAnswer ? ( 340 * (props.correctAnswer / props.numberQuestions) ) : 0
        const incorrectHeight = props.falseAnswer ? ( 340 * (props.falseAnswer / props.numberQuestions) ) : 0
        // const correctHeight: 340 * (this.props.falseAnswer / 10),
        //     const incorrectHeight: 340 * (this.props.correctAnswer / 10),

        this.state = {
            correctHeight: correctHeight,
            incorrectHeight: incorrectHeight,
            barHeight: [
                new Animated.Value(0),
                new Animated.Value(0),
            ],
            //barHeight: [200, 300],
            textPerfect: 'PERFECT SCORE!', // 100
            textGood: 'GREAT JOB!', // 80 - 90
            textOk: 'WELL DONE!', // 60 - 80
            textBad: 'BETTER LUCK NEXT TIME!', // 0 - 60
        }
    }

    componentDidMount() {

        Animated.timing(this.state.barHeight[0], {
            toValue: this.state.correctHeight,
            duration: 500,
        }).start();

        Animated.timing(this.state.barHeight[1], {
            toValue: this.state.incorrectHeight,
            duration: 500,
        }).start();
    }

    render() {

        return (
            <View style={styles.outerWrap}>

                <View style={styles.headerWrap}>
                    <Text style={styles.headerText}>QUIZ RESULTS</Text>
                    <Text style={styles.headerText2}>HERE IS HOW YOU DID</Text>
                </View>

                <View style={styles.graphWrap}>

                    <View style={styles.barItemWrap}>

                        <LinearAnimate colors={gradients[0]}
                                       style={[styles.barGradient, {height: this.state.barHeight[0]}]}>
                        </LinearAnimate>
                        <View style={styles.labelWrap}>
                            <Text style={styles.labelText}>CORRECT</Text>
                        </View>
                    </View>

                    <View style={styles.barItemWrap}>

                        <LinearAnimate colors={gradients[1]}
                                       style={[styles.barGradient, {height: this.state.barHeight[1]}]}>
                        </LinearAnimate>
                        <View style={styles.labelWrap}>
                            <Text style={styles.labelText}>INCORRECT</Text>
                        </View>
                    </View>


                </View>


                <View style={styles.menuBar}>
                    <StatsButton handleClick={() => this.props.startQuiz()} buttonText="NEW GAME"/>
                    <StatsButton handleClick={() => this.props.goToHome()} buttonText="HOME"/>
                </View>
            </View>
        )
    }
}

mapStateToProps = (state) => ({
    correctAnswer: state.correctAnswer,
    falseAnswer: state.falseAnswer,
    numberQuestions: state.numberQuestions,
})

mapActionsToProps = (dispatch) => ({
    startQuiz() {
        dispatch({type: 'START_QUIZ'})
    },
    goToHome() {
        dispatch({type: 'QUIZ_RESET'})
    }
})

export const Results = connect(mapStateToProps, mapActionsToProps)(_Results)

//module.exports = Stats