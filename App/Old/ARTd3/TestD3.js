import React, {Component} from 'react'

import {View,Text} from 'react-native'

import d3 from 'd3'

const y = d3.scaleLinear().domain([0,100]).range([0,640])
y(50)
y(80)

class Tester extends Component {
    constructor() {
        super()
    }

    render() {

        return(
            <View style={{flex: 1, backgroundColor: 'blue',justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30}}>Here is some text...</Text>
            </View>
        )
    }
}

module.exports = Tester