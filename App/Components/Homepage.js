/**
 * Home JS file
 * First file to load - I should break apart the animations into smaller components
 */
import React, {Component} from 'react';
//import Quiz from './Quiz';
//import SvgElement from './SvgElement';
//import svg_question from '../SVG/question';
import {QuizWrap} from './QuizWrap'; // @todo call this quiz wrap instaed? is this needed?

import StartQuizButton from './StartQuizButton';

import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    //TouchableHighlight,
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
        //fontFamily: 'lalezar_regular',
        fontFamily: 'Lalezar',
    },
    // buttonWrap: {
    //     backgroundColor: 'rgba(255,255,255,0.8)',
    //     paddingHorizontal: 10,
    //     paddingVertical: 5,
    //     marginTop: 15,
    //     borderRadius: 5,
    // },
    // button: {
    //     color: '#E51D12',
    //     fontWeight: 'bold',
    //     fontSize: 30,
    // },
    gridItem: {
        backgroundColor: '#20b2aa', // 'lightseagreen', //#20b2aa
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
    },
    questionText: {
        fontSize: 33,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.3)',
    }
});

//var background_color_array = [];
const {width, height} = Dimensions.get('window');
const num_horizontal = 6;
const num_vertical = 10;
const total_grid_items = ( num_horizontal * num_vertical );
const grid_array = [];
for (i = 0; i < total_grid_items; i++) {
    grid_array.push(i);
    //background_color_array.push('#20b2aa');
}
// console.log('gridz');
// console.log(grid_array);

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

let shuffled_grid_array = shuffleArray(grid_array);
//console.log(shuffled_grid_array);

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
        var background_color_array = [];
        for (i = 0; i < total_grid_items; i++) {
            background_color_array.push('#20b2aa');
        }

        this.state = {
            started: false,
            background_array: background_color_array
        }

    }

    componentWillMount() {
        this.animatedValue = [];
        grid_array.forEach((item) => {

            this.animatedValue[item] = new Animated.Value(0);
        })
    }

    changeColorRecursive(array, length, i, old_i = null, shuffle) {

        // console.log('array', array);
        // console.log('length', length);
        //console.log('shuffle', shuffled_grid_array)
        //console.log( 'i', i);
        if ( i < ( length ) ) {
            //console.log( array[i]);

            setTimeout(() => {
                //array[shuffled_grid_array[i]] = '#07CA88';
                array[shuffled_grid_array[i]] = '#089CCA';
                if ( old_i != null ) {
                    array[old_i] = '#20b2aa'
                }

                this.setState({
                    background_array: array,
                })
                let oldster = shuffled_grid_array[i];
                i++;
                this.changeColorRecursive(array, length, i, oldster);
            }, 100)


        } else {
            console.log('finalize');
        }

    }

    componentDidMount() {
        const animated_timing = grid_array.map((a) => {
            Animated.timing(this.animatedValue[a], {
                toValue: 9,
                duration: 10000,
            }).start()
        });
        Animated.stagger(5000, animated_timing);

        let new_bg_array = this.state.background_array;
        // new_bg_array[33] = 'green';
        // this.setState({
        //     background_array: new_bg_array,
        // })

        // setTimeout(() => {
        //     new_bg_array[22] = '#07CA88';
        //     this.setState({
        //         background_array: new_bg_array,
        //     })
        // }, 3000)

        let i = 0;
        this.changeColorRecursive(new_bg_array, new_bg_array.length, i);

        /**
         * I need to pass in a function that will call itself as well...
         */

        setTimeout(function() {
            // do something
            setTimeout(function() {
                // do second thing
            }, 1000);
        }, 1000);






        // const animated_timing_bg = grid_array.map((a) => {
        //     new_bg_array[22] = 'green';
        //     this.setState({
        //         background_array: new_bg_array,
        //     })
        //
        // });
        //
        // Animated.stagger(5000, animated_timing_bg);
    }

    startQuiz() {
        this.setState({
            started: true,
        })
    }

    render() {

        const grid = grid_array.map((item, key) => {

            const interpolateColor = this.animatedValue[item].interpolate({
                inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                //inputRange: [0, 1],
                outputRange: ['#20b2aa', '#089CCA', '#07CA88', '#10CAC0', 'black', '#5CCA9D', '#089CCA', '#07CA88', '#10CAC0', '#5CCA9D', '#20b2aa'],
                //outputRange: ['#fff', '#000'],
                // white / blue / green / aqua / light green
            })
            const animatedStyle = {
                //backgroundColor: interpolateColor,
                //backgroundColor: '#20b2aa'
                //backgroundColor: background_color_array[key]
                backgroundColor: this.state.background_array[key]
            }


            return (
                <Animated.View style={[styles.gridItem, {width: item_width, height: item_height}, animatedStyle]}
                               key={key}>
                    <View>
                        <Text style={styles.questionText}>?</Text>
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
                    <StartQuizButton startQuiz={() => this.startQuiz()} buttonText="START" navigator={this.props.navigator}/>
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
