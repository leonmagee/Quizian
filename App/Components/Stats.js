import React, {Component} from 'react'
import {
    View,
    Text,
    AsyncStorage,
} from 'react-native'


class Stats extends Component {

    constructor() {
        super()

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
        }

    }


    componentWillMount() {

        // const questionKeyArray = [
        //     'sports_true',
        //     'sports_false',
        //     'history_true',
        //     'history_false',
        //     'entertainment_true',
        //     'entertainment_false',
        //     'music_true',
        //     'music_false',
        //     'geography_true',
        //     'geography_false',
        // ]

        AsyncStorage.getItem('@QuestionAnswers:history_true').then((value) => {
            if ( value ) {
                this.setState({
                    history_true: Number(value)
                })
            } else {
                this.setState({
                    history_true: 7
                })
            }
        }).done()

        AsyncStorage.getItem('@QuestionAnswers:history_false').then((value) => {
            if ( value ) {
                this.setState({
                    history_false: Number(value)
                })
            }
        }).done()



        }




        // storageKey = 'history_false'
        // AsyncStorage.getItem('@QuestionAnswers:' + storageKey).then((value) => {
        //     //console.log('I have this many incorrect geography answers!!!!', value)
        //     this.setState({
        //         historyFalse: Number(value),
        //     })
        // }).done()
        // questionKeyArray.map((item) => {
        //     AsyncStorage.setItem('@QuestionAnswers:' + item, "0")
        // })





    componentDidMount() {








        if (this.state.history_true || this.state.history_false) {
            //var historyTotal = this.state.historyCorrect + this.state.historyFalse

            if (!this.state.history_false) {
                this.setState({
                    historyPercent: 100
                })
            } else if (this.state.history_true) {
                console.log('this shit is true???')
                let historyTotal = this.state.history_true + this.state.history_false
                let historyPercent = ( this.state.history_true / historyTotal ) * 100
                let historyPercentFinal = historyPercent.toFixed(0)

                this.setState({
                    historyPercent: historyPercentFinal
                })
            }


        }
    }


    render() {


        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#F7F7F7'}}>
                <Text style={{fontSize: 20}}>History Questions - {this.state.historyPercent}% Correct</Text>
            </View>
        )
    }
}


module.exports = Stats