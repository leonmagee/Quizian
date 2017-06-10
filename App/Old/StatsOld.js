import React, {Component} from 'react'
import {
    View,
    Text,
    AsyncStorage,
} from 'react-native'


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

            // stores.map((result, i, store) => {
            //     // get at each store's key/value so you can work with it
            //     let key = store[i][0];
            //     let value = store[i][1];
            // });
        }).then(() => {
            this.setDataFromStorage()
        })


        /**
         * @todo switch out these 10 calls to getItem with one call to multiGet
         */
        // AsyncStorage.getItem('@QuestionAnswers:history_true').then((value) => {
        //     if (value) {
        //         this.setState({
        //             history_true: Number(value)
        //         })
        //     }
        // }).done(() => {
        //     AsyncStorage.getItem('@QuestionAnswers:history_false').then((value) => {
        //         if (value) {
        //             this.setState({
        //                 history_false: Number(value)
        //             })
        //         }
        //     }).done(() => {
        //         AsyncStorage.getItem('@QuestionAnswers:sports_true').then((value) => {
        //             if (value) {
        //                 this.setState({
        //                     sports_true: Number(value)
        //                 })
        //             }
        //         }).done(() => {
        //             AsyncStorage.getItem('@QuestionAnswers:sports_false').then((value) => {
        //                 if (value) {
        //                     this.setState({
        //                         sports_false: Number(value)
        //                     })
        //                 }
        //             }).done(() => {
        //                 AsyncStorage.getItem('@QuestionAnswers:music_true').then((value) => {
        //                     if (value) {
        //                         this.setState({
        //                             music_true: Number(value)
        //                         })
        //                     }
        //                 }).done(() => {
        //                     AsyncStorage.getItem('@QuestionAnswers:music_false').then((value) => {
        //                         if (value) {
        //                             this.setState({
        //                                 music_false: Number(value)
        //                             })
        //                         }
        //                     }).done(() => {
        //                         AsyncStorage.getItem('@QuestionAnswers:geography_true').then((value) => {
        //                             if (value) {
        //                                 this.setState({
        //                                     geography_true: Number(value)
        //                                 })
        //                             }
        //                         }).done(() => {
        //                             AsyncStorage.getItem('@QuestionAnswers:geography_false').then((value) => {
        //                                 if (value) {
        //                                     this.setState({
        //                                         geography_false: Number(value)
        //                                     })
        //                                 }
        //                             }).done(() => {
        //                                 AsyncStorage.getItem('@QuestionAnswers:entertainment_true').then((value) => {
        //                                     if (value) {
        //                                         this.setState({
        //                                             entertainment_true: Number(value)
        //                                         })
        //                                     }
        //                                 }).done(() => {
        //                                     AsyncStorage.getItem('@QuestionAnswers:entertainment_false').then((value) => {
        //                                         if (value) {
        //                                             this.setState({
        //                                                 entertainment_false: Number(value)
        //                                             })
        //                                         }
        //                                         console.log('made it all the way!')
        //                                     }).done(() => {
        //                                         /**
        //                                          * Add data retrieved!
        //                                          */
        //                                         this.setDataFromStorage()
        //                                     })
        //                                 })
        //                             })
        //                         })
        //                     })
        //                 })
        //             })
        //         })
        //     })
        // })
        //


    }


    render() {

        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#F7F7F7'}}>
                <Text style={{fontSize: 20}}>History Questions - {this.state.historyPercent}% Correct</Text>
                <Text style={{fontSize: 20}}>Sports Questions - {this.state.sportsPercent}% Correct</Text>
            </View>
        )
    }
}


module.exports = Stats