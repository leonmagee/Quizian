import React, {Component} from 'react';
import styles from '../Styles/DefaultStyles'
import variables from '../Styles/Variables'
import LinearGradient from 'react-native-linear-gradient';
import SvgElement from './SvgElement';
import television from '../SVG/television';
import history from '../SVG/history';
import music from '../SVG/music';
import sports from '../SVG/sports';
import geography from '../SVG/geography';
import {shuffleArray} from '../Utils/helper';

import {
    View,
    Text,
    Dimensions,
    Animated,
} from 'react-native';
let {width, height} = Dimensions.get('window');

class Categories extends Component {

    constructor() {
        super();

        this.state = {
            animatedOpacity: [
                new Animated.Value(0), //sports
                new Animated.Value(0), //music
                new Animated.Value(0), //tv&movies
                new Animated.Value(0), //history
                new Animated.Value(0), //geography
            ],
            //numberAnimations: 0,
        }
    }

    componentDidMount() {
        //this.flickerColor();

        const base_array = [0,1,2,3,4]
        const shuffled = shuffleArray(base_array)
        const shuffled2 = shuffleArray(base_array)
        //const shuffled3 = shuffleArray(base_array)
        const combo = shuffled.concat(shuffled2);
        //const combo2 = combo.concat(shuffled3);
        const final_shuffle = shuffleArray(combo)

        console.log(final_shuffle)

        this.colorOpacity(0, final_shuffle)
    }

    colorOpacity(index,shuffle) {
        Animated.timing(this.state.animatedOpacity[shuffle[index]], {
            toValue: 0.5,
            duration: 150,
        }).start(() => this.fadeOpacity(index, shuffle));
    }

    colorOpacityFinal(index, count) {
        Animated.timing(this.state.animatedOpacity[index], {
            toValue: 0.5,
            duration: 150,
        }).start(() => this.fadeOpacityFinal(index, count));
    }

    fadeOpacity(index, shuffle) {
        Animated.timing(this.state.animatedOpacity[shuffle[index]], {
            toValue: 0,
            duration: 150,
        }).start(
            () => {
                if ( index < 8 ) {
                    index = index + 1;
                    setTimeout(() => {
                        this.colorOpacity(index, shuffle)
                    }, 50)
                } else {
                    // this is where you make it blink several times quickly...
                    setTimeout(() => {
                        this.colorOpacityFinal(shuffle[index], 0)
                    }, 50)
                }
            }
        );
    }

    fadeOpacityFinal(index, count) {
        Animated.timing(this.state.animatedOpacity[index], {
            toValue: 0,
            duration: 150,
        }).start(
            () => {
                if ( count < 2 ) {
                    count = count + 1;
                    setTimeout(() => {
                        this.colorOpacityFinal(index, count)
                    }, 50)
                } else {
                    // this is where you set the final color
                    Animated.timing(this.state.animatedOpacity[index], {
                        toValue: 0.5,
                        duration: 150,
                    }).start();
                    /**
                     * You can also take this index and dispatch it as the chosen category...
                     */
                }
            }
        );
    }

    render() {


        const num_horizontal = 3; // 6
        const num_vertical = 5; // 10
        const total_grid_items = ( num_horizontal * num_vertical );
        const grid_array = [];
        for (i = 0; i < total_grid_items; i++) {
            grid_array.push(i);
        }
        const item_width = ( ( ( width) / num_horizontal ) );
        const item_height = ( ( ( height) / num_vertical ) );

        return (
            <LinearGradient colors={variables.gradient} style={{flex: 1}}>
                <View style={styles.categoriesWrap}>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}></View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}></View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <SvgElement svg_data={sports} svg_scale={0.375}/>
                        <Text style={styles.categoriesText}>Sports</Text>
                        <Animated.View
                            style={[styles.catColorOverlay, {opacity: this.state.animatedOpacity[0]}]}></Animated.View>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}></View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}></View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}></View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <SvgElement svg_data={music} svg_scale={1.4}/>
                        <Text style={styles.categoriesText}>Music</Text>
                        <Animated.View
                            style={[styles.catColorOverlay, {opacity: this.state.animatedOpacity[1]}]}></Animated.View>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <SvgElement svg_data={television} svg_scale={0.15}/>
                        <Text style={styles.categoriesText}>TV & Movies</Text>
                        <Animated.View
                            style={[styles.catColorOverlay, {opacity: this.state.animatedOpacity[2]}]}></Animated.View>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <SvgElement svg_data={history} svg_scale={0.7}/>
                        <Text style={styles.categoriesText}>History</Text>
                        <Animated.View
                            style={[styles.catColorOverlay, {opacity: this.state.animatedOpacity[3]}]}></Animated.View>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}></View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}></View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}></View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <SvgElement svg_data={geography} svg_scale={1.38}/>
                        <Text style={styles.categoriesText}>Geography</Text>
                        <Animated.View
                            style={[styles.catColorOverlay, {opacity: this.state.animatedOpacity[4]}]}></Animated.View>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}></View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}></View>
                </View>
            </LinearGradient>
        )
    }
}

module.exports = Categories;