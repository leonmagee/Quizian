import React from 'react'

import {View, ART} from 'react-native'

import * as scale from 'd3-scale'
import * as shape from 'd3-shape'
import * as d3Array from 'd3-array'
const d3 = {
    scale,
    shape,
}

const {Group, Shape, Surface} = ART

//this.computeNextState(this.props)

export default function ReactNativeART() {
    return (
        <View>
            <Surface width={500} height={500}>
                <Group x={0} y={0}>
                    <Shape d="M151.464,311.387c0,0-96.765-108.149,11.384-113.841s213.452,38.896,160.326-27.512
	S270.049,50.5,389.582,75.166s19.922,240.015-105.303,199.222s-161.275-31.306-97.714,3.795S262.459,459.381,151.464,311.387z" stroke="#000" strokeWidth={5} fill="blue" scale={0.7}/>
                </Group>
            </Surface>
        </View>
    )
}
