import React, {Component} from 'react';
import {QuizWrap} from './QuizWrap'; // @todo call this quiz wrap instaed? is this needed?
import StartQuizButton from './StartQuizButton';
import {shuffleArray} from '../Utils/helper';

import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
} from 'react-native';


const styles = StyleSheet.create({
    homeWrap: {
        flex: 1,
        padding: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(32,178,170,0.85)',
    },
    homeTextWrap: {
        position: 'absolute',
        zIndex: 333,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeText: {
        color: 'rgba(255,255,255,1)',
        fontSize: 60,
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 1, height: 1},
        fontFamily: 'Lalezar',
    },
    gridItem: {
        //backgroundColor: '#20b2aa',
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
    },
    questionText: {
        fontSize: 33,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.3)',
        opacity: 0,
    }
});

/**
 * @todo why is there here instead of in constructor?
 * @todo move this to state?
 */
const {width, height} = Dimensions.get('window');
const num_horizontal = 6;
const num_vertical = 10;
const total_grid_items = ( num_horizontal * num_vertical );
const grid_array = [];
for (i = 0; i < total_grid_items; i++) {
    grid_array.push(i);
}

let shuffled_grid_array = shuffleArray(grid_array);

/**
 * @todo change this to only use grid array?
 * @type {Array}
 */
const item_width = ( ( ( width - 2 ) / num_horizontal ) - 2);
const item_height = ( ( ( height - 2 ) / num_vertical ) - 2 );

class Homepage extends Component {

    constructor(props) {
        super(props);
        const num_horizontal = 6;
        const num_vertical = 10;
        const total_grid_items = ( num_horizontal * num_vertical );
        //const grid_array = [];
        var grid_styles_array = [];
        for (i = 0; i < total_grid_items; i++) {
            grid_styles_array.push({bg: '#20b2aa', opacity: 0});
        }

        this.state = {
            started: false,
            grid_styles_array: grid_styles_array
        }

    }

    componentWillMount() {
        // this.animatedValue = [];
        // grid_array.forEach((item) => {
        //
        //     this.animatedValue[item] = new Animated.Value(0);
        // })
    }

    changeColorRecursive(array, length, i, old_i = null) {

        if (i < ( length )) {

            setTimeout(() => {
                array[shuffled_grid_array[i]].bg = '#19c3ba';
                array[shuffled_grid_array[i]].opacity = 1;

                //array[shuffled_grid_array[i]].bg = 'red';
                if (old_i != null) {
                    array[old_i].bg = '#20b2aa'
                    array[old_i].opacity = 0.8
                }

                this.setState({
                    background_array: array,
                })
                let oldster = shuffled_grid_array[i];
                i++;
                this.changeColorRecursive(array, length, i, oldster);
            }, 50)


        } else {
            console.log('finalize');
        }

    }

    componentDidMount() {
        // const animated_timing = grid_array.map((a) => {
        //     Animated.timing(this.animatedValue[a], {
        //         toValue: 9,
        //         duration: 10000,
        //     }).start()
        // });
        //Animated.stagger(5000, animated_timing);

        let new_styles_array = this.state.grid_styles_array;

        let i = 0;
        this.changeColorRecursive(new_styles_array, new_styles_array.length, i);

    }

    startQuiz() {
        this.setState({
            started: true,
        })
    }

    render() {

        const grid = grid_array.map((item, key) => {

            // const interpolateColor = this.animatedValue[item].interpolate({
            //     inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            //     //inputRange: [0, 1],
            //     outputRange: ['#20b2aa', '#089CCA', '#07CA88', '#10CAC0', 'black', '#5CCA9D', '#089CCA', '#07CA88', '#10CAC0', '#5CCA9D', '#20b2aa'],
            //     //outputRange: ['#fff', '#000'],
            //     // white / blue / green / aqua / light green
            // })
            const stylesView = {
                backgroundColor: this.state.grid_styles_array[key].bg
            }

            const stylesText = {
                opacity: this.state.grid_styles_array[key].opacity
            }


            return (
                <Animated.View style={[styles.gridItem, {width: item_width, height: item_height}, stylesView]}
                               key={key}>
                    <View>
                        <Text style={[styles.questionText, stylesText]}>?</Text>
                    </View>
                </Animated.View>
            )
        })

        if (this.state.started) {
            var MainComponent = <QuizWrap/>
        } else {
            var MainComponent = <View style={styles.homeWrap}>
                <View style={[styles.homeTextWrap, {width: width, height: height}]}>
                    <Text style={styles.homeText}>Quizian</Text>
                    <StartQuizButton startQuiz={() => this.startQuiz()} buttonText="START"
                                     navigator={this.props.navigator}/>
                </View>
                {grid}
            </View>;
        }

        return (
            <View style={{flex: 1}}>
                {MainComponent}
            </View>
        )
    }
}

module.exports = Homepage;
