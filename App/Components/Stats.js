import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'

import {
    View,
    Text,
    AsyncStorage,
    StyleSheet,
    Animated,
} from 'react-native'

const LinearAnimate = Animated.createAnimatedComponent(LinearGradient)


const styles = new StyleSheet.create({
    graphWrap: {
        height: 400,
        width: 300,
        backgroundColor: '#F7F7F7',
        margin: 10,
        padding: 10,
        borderColor: '#222',
        borderWidth: 2,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    barGraph: {
        width: 70,
        //height: 0,
        backgroundColor: 'blue',
        marginRight: 10,
    },
    barGradient: {
        width: 70,
        marginRight: 10,
    }
})


class Stats extends Component {

    constructor() {
        super()

        // const shapeData = [
        //     {"number":  8, "name": 'Fun activities'},
        //     {"number": 7, "name": 'Dog'},
        //     {"number": 16, "name": 'Food'},
        //     {"number": 23, "name": 'Car'},
        //     {"number": 42, "name": 'Rent'},
        //     {"number":  4, "name": 'Misc'},
        // ];

        // const barHeight = new Animated.Value(100)
        // //const barHeight = 150


        this.state = {
            sports_true: 0,
            sports_false: 0,
            history_true: 0,
            history_false: 0,
            entertainment_true: 0,
            entertainment_false: 0,
            music_true: 0,
            music_false: 0,
            geography_true: 0,
            geography_false: 0,
            historyPercent: 0,
            sportsPercent: 0,
            musicPercent: 0,
            entertainmentPercent: 0,
            geographyPercent: 0,
            barHeight: new Animated.Value(100),
        }
    }

    setDataFromStorage() {
        if (this.state.history_true || this.state.history_false) {
            if (!this.state.history_false) {
                this.setState({
                    historyPercent: 100
                })
            } else if (this.state.history_true) {
                let historyTotal = this.state.history_true + this.state.history_false
                let historyPercent = ( this.state.history_true / historyTotal ) * 100
                let historyPercentFinal = historyPercent.toFixed(0)
                this.setState({
                    historyPercent: historyPercentFinal
                })
            }
        }

        if (this.state.sports_true || this.state.sports_false) {
            if (!this.state.sports_false) {
                this.setState({
                    sportsPercent: 100
                })
            } else if (this.state.sports_true) {
                let sportsTotal = this.state.sports_true + this.state.sports_false
                let sportsPercent = ( this.state.sports_true / sportsTotal ) * 100
                let sportsPercentFinal = sportsPercent.toFixed(0)
                this.setState({
                    sportsPercent: sportsPercentFinal
                })
            }
        }
    }

    componentDidMount() {

        Animated.timing(this.state.barHeight, {
            toValue: 300,
            duration: 400,
        }).start();

        const asyncKeysInit = [
            'sports_true',
            'sports_false',
            'history_true',
            'history_false',
            'entertainment_true',
            'entertainment_false',
            'music_true',
            'music_false',
            'geography_true',
            'geography_false',
        ]

        const asyncKeys = []
        asyncKeysInit.map((i, k) => {
            let keyNew = '@QuestionAnswers:' + i
            asyncKeys.push(keyNew)
        })
        console.log(asyncKeys)

        AsyncStorage.multiGet(asyncKeys, (err, stores) => {
            console.log('all the stores!', stores)

            this.setState({
                sports_true: Number(stores[0][1]),
                sports_false: Number(stores[1][1]),
                history_true: Number(stores[2][1]),
                history_false: Number(stores[3][1]),
                entertainment_true: Number(stores[4][1]),
                entertainment_false: Number(stores[5][1]),
                music_true: Number(stores[6][1]),
                music_false: Number(stores[7][1]),
                geography_true: Number(stores[8][1]),
                geography_false: Number(stores[9][1]),
            })

        }).then(() => {
            this.setDataFromStorage()
        })
    }

    render() {



        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#F7F7F7'}}>
                <Text style={{fontSize: 20}}>History Questions - {this.state.historyPercent}% Correct</Text>
                <Text style={{fontSize: 20}}>Sports Questions - {this.state.sportsPercent}% Correct</Text>
                <View style={styles.graphWrap}>
                    <Animated.View style={[styles.barGraph, {height: this.state.barHeight}]}/>
                    <Animated.View style={[styles.barGraph, {height: this.state.barHeight}]} />
                    <LinearAnimate colors={['blue', 'red']} style={[styles.barGradient, {height: this.state.barHeight}]} >
                    </LinearAnimate>
                </View>
            </View>
        )
    }
}


module.exports = Stats