import React, {Component} from 'react';
import {connect} from 'react-redux'
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

class _Categories extends Component {

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
        const base_array = [0, 1, 2, 3, 4]
        const shuffle = shuffleArray(base_array)
        setTimeout( () => {
            this.colorOpacity(0, shuffle)
        }, 300 )
    }

    colorOpacity(index, shuffle) {
        Animated.timing(this.state.animatedOpacity[shuffle[index]], {
            toValue: 0.3,
            duration: 300,
        }).start(() => this.fadeOpacity(index, shuffle));
    }

    fadeOpacity(index, shuffle) {
        Animated.timing(this.state.animatedOpacity[shuffle[index]], {
            toValue: 0,
            duration: 300,
        }).start(
            () => {
                if (index < 4) {
                    index = index + 1;
                    setTimeout(() => {
                        this.colorOpacity(index, shuffle)
                    }, 50)
                } else {

                    // this is where you make it blink several times quickly
                    setTimeout(() => {
                        //this.colorOpacityFinal(shuffle[index], 0)
                        this.catAnimationFinal(shuffle[index])
                    }, 50)

                }
            }
        );
    }


    catAnimationFinal(index) {
        // this is where you set the final color
        Animated.timing(this.state.animatedOpacity[index], {
            toValue: 0.3,
            duration: 300,
        }).start();

        setTimeout(() => {
            if (index === 0) {
                this.props.setCatIndex(this.props.sportsIndex);
                this.props.catWasSelected('sports')
            }
            if (index === 1) {
                this.props.setCatIndex(this.props.musicIndex);
                this.props.catWasSelected('music')
            }
            if (index === 2) {
                this.props.setCatIndex(this.props.entertainmentIndex);
                this.props.catWasSelected('entertainment')
            }
            if (index === 3) {
                this.props.setCatIndex(this.props.historyIndex);
                this.props.catWasSelected('history')
            }
            if (index === 4) {
                this.props.setCatIndex(this.props.geographyIndex);
                this.props.catWasSelected('geography')
            }
        }, 1000)
    }


    colorOpacityFinal(index, count) {
        Animated.timing(this.state.animatedOpacity[index], {
            toValue: 0.3,
            duration: 300,
        }).start(() => this.fadeOpacityFinal(index, count));
    }


    fadeOpacityFinal(index, count) {
        Animated.timing(this.state.animatedOpacity[index], {
            toValue: 0,
            duration: 300,
        }).start(
            () => {
                    // this is where you set the final color
                    Animated.timing(this.state.animatedOpacity[index], {
                        toValue: 0.3,
                        duration: 300,
                    }).start();

                    setTimeout(() => {
                        if (index === 0) {
                            this.props.setCatIndex(this.props.sportsIndex);
                            this.props.catWasSelected('sports')
                        }
                        if (index === 1) {
                            this.props.setCatIndex(this.props.musicIndex);
                            this.props.catWasSelected('music')
                        }
                        if (index === 2) {
                            this.props.setCatIndex(this.props.entertainmentIndex);
                            this.props.catWasSelected('entertainment')
                        }
                        if (index === 3) {
                            this.props.setCatIndex(this.props.historyIndex);
                            this.props.catWasSelected('history')
                        }
                        if (index === 4) {
                            this.props.setCatIndex(this.props.geographyIndex);
                            this.props.catWasSelected('geography')
                        }
                    }, 1000)

            }
        );
    }

    render() {

        // 0 - sports / 1 - music / 2 - entertainment / 3 - history / 4 - geography

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

const mapStateToProps = (state) => ({
    chooseCat: state.chooseCat,
    catIndex: state.catIndex,
    historyIndex: state.historyIndex,
    sportsIndex: state.sportsIndex,
    entertainmentIndex: state.entertainmentIndex,
    musicIndex: state.musicIndex,
    geographyIndex: state.geographyIndex,
})

const mapActionsToProps = (dispatch) => ({
    catWasSelected(cat) {
        dispatch({type: 'CAT_CHOSEN', payload: cat})
    },
    setCatIndex(index_array) {
        dispatch({type: 'SET_CAT_INDEX', payload: index_array})
    },
})

export const Categories = connect(mapStateToProps, mapActionsToProps)(_Categories)
