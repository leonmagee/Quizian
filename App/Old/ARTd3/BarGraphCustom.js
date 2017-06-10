import React, {Component} from 'react'
import {View, Dimensions, TouchableWithoutFeedback} from 'react-native'
import Morph from 'art/morph/path'

import Svg, {
    G,
    Line,
    Path,
    Rect,
    Text
} from 'react-native-svg'

// d3 lib
import {
    scaleBand,
    scaleLinear
} from 'd3-scale'

import {
    max,
    ticks
} from 'd3-array'

import {
    line
} from 'd3-shape'

// import {
//     path
// } from 'd3-path'

const colors = {
    black: 'black',
    blue: 'steelblue',
    brown: 'brown',
    red: 'red',
}



// create the barchart (http://bl.ocks.org/mbostock/3885304)
const data = [
    {frequency: 1, letter: 'GEOGRAPHY'},
    {frequency: 1, letter: 'SPORTS'},
    {frequency: 1, letter: 'HISTORY'},
    {frequency: 1, letter: 'MUSIC'},
    {frequency: 1, letter: 'TV/MOVIES'},
]

const dataResults = [
    {frequency: 100, letter: 'GEOGRAPHY'},
    {frequency: 77.234234, letter: 'SPORTS'},
    {frequency: 40, letter: 'HISTORY'},
    {frequency: 10, letter: 'MUSIC'},
    {frequency: 23, letter: 'TV/MOVIES'},
]

class App extends Component {
    render() {
        return (
            <View>
                <BarChart />
            </View>
        )
    }
}

const pathFrom = 3
const pathTo = 5   // NEW SVG path

class BarChart extends Component {
    state = {
        /**
         * barColour is an array with 5 colors, one for each bar.
         * I can probably use a state for the height / width of the bar chart and animate that
         */
        barColour: data.map(()=>colors.blue),
        path: Morph.Tween(
            pathFrom,  // OLD SVG path
            pathTo,    // NEW SVG path
        ),
    }

    toggleHighlight(i) {
        this.setState({
            barColour: [
                ...this.state.barColour.slice(0, i),
                this.state.barColour[i] === colors.blue ? colors.brown : colors.blue,
                ...this.state.barColour.slice(i+1)
            ]
        })
    }

    render() {
        const screen = Dimensions.get('window')
        const margin = {top: 100, right: 25, bottom: 100, left: 25}
        const width = screen.width - margin.left - margin.right
        const height = screen.height - margin.top - margin.bottom
        const x = scaleBand()
            .rangeRound([0, width])
            .padding(0.1)
            .domain(data.map(d => d.letter))
        const maxFrequency = max(data, d => d.frequency)
        const y = scaleLinear()
            .rangeRound([height, 0])
            .domain([0, maxFrequency])

        const firstLetterX = x(data[0].letter)
        const secondLetterX = x(data[1].letter)
        const lastLetterX = x(data[data.length - 1].letter)
        const labelDx = (secondLetterX - firstLetterX) / 2

        const bottomAxis = [firstLetterX - labelDx, lastLetterX + labelDx]
        const bottomAxisD = line()
            .x(d => d + labelDx)
            .y(() => 0)
            (bottomAxis)

        const leftAxis = ticks(0, maxFrequency, 10) // set number of left axis increments
        const leftAxisD = line()
            .x(() => bottomAxis[0] + labelDx)
            .y(d => y(d) - height)
            (leftAxis)

        const notch = 5 // height of notch line
        const labelDistance = 20 // vertical label distance
        const notchWidth = 8
        const axisMargin = [30,18,20,16,24]

        // first G is bottom graph element (x axis)
        const svg = (
            <Svg width={screen.width} height={screen.height}>
                <G translate={margin.left + "," + margin.top}>
                    <G translate={"0," + height}>
                        <G key={-1}>
                            <Path stroke={colors.black} d={bottomAxisD} key="-1"/>
                            {
                                data.map((d, i) => (
                                    <G key={i + 1} translate={x(d.letter) + labelDx + ",0"}>
                                        <Line stroke={colors.black} y2={notch} strokeWidth={1}/>
                                        <Text fontSize="10" fill={colors.black} y={labelDistance} x={-axisMargin[i]}>{d.letter}</Text>
                                    </G>
                                ))
                            }
                        </G>
                        <G key={-2}>
                            <Path stroke={colors.black} d={leftAxisD} key="-1" strokeWidth={1}/>
                            {
                                leftAxis.map((d, i) => (
                                    <G key={i + 1} translate={"0," + (y(d) - height)}>
                                        <Line stroke={colors.black} x1={notch} x2={notchWidth}/>
                                        <Text fill={colors.black} x={-labelDistance} y={-notch}>{d}</Text>
                                    </G>
                                ))
                            }
                        </G>
                        {

                            data.map((d, i) => (
                                //console.log('x', x(d.letter))
                                //console.log('y', y(d.frequency))
                            //data.map((d,i) => {
                            //    console.log('d',d)
                            //    console.log('i',i)
                            //    console.log('x', x(d.letter))
                            //    console.log('y', y(d.frequency))
                            //})
                                <TouchableWithoutFeedback key={i} onPress={()=>this.toggleHighlight(i)}>
                                    <Rect x={x(d.letter) + 5}
                                          y={y(d.frequency) - height}
                                          width={x.bandwidth()}
                                          height={height - y(d.frequency)}
                                          fill={this.state.barColour[i]}>
                                    </Rect>
                                </TouchableWithoutFeedback>
                            ))
                        }
                    </G>
                </G>
            </Svg>
        )

        return svg;
    }
}

export default App