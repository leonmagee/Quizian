/**
 * Home JS file
 * First file to load - I should break apart the animations into smaller components
 */
import React, {Component} from 'react';
//import Quiz from './Quiz';
//import SvgElement from './SvgElement';
//import svg_question from '../SVG/question';
import {MainWrap} from './MainWrap'; // @todo call this quiz wrap instaed? is this needed?

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


const {width, height} = Dimensions.get('window');
const num_horizontal = 6;
const num_vertical = 10;
const total_grid_items = ( num_horizontal * num_vertical );
const grid_array = [];
for (i = 0; i < total_grid_items; i++) {
    grid_array.push(i);
}

/**
 * @todo change this to only use grid array?
 * @type {Array}
 */
const item_width = ( ( ( width - 2 ) / num_horizontal ) - 2);
const item_height = ( ( ( height - 2 ) / num_vertical ) - 2 );

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            started: false,
        }
    }

    // startQuiz() {
    //     this.props.navigator.push({
    //         component: MainWrap,
    //         title: 'Quizian',
    //         navigationBarHidden: false
    //     });
    // }

    componentWillMount() {
        this.animatedValue = [];
        grid_array.forEach((item) => {

            this.animatedValue[item] = new Animated.Value(0);
        })
    }

    componentDidMount() {
        const animated_timing = grid_array.map((a) => {
            Animated.timing(this.animatedValue[a], {
                toValue: 9,
                duration: 10000,
            }).start()
        });
        Animated.stagger(5000, animated_timing);
    }

    startQuiz() {
        this.setState({
            started: true,
        })
    }

    render() {

        const grid = grid_array.map((item, key) => {

            const interpolateColor = this.animatedValue[item].interpolate({
                inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                //inputRange: [0, 1],
                outputRange: ['#20b2aa', '#089CCA', '#07CA88', '#10CAC0', '#5CCA9D', '#089CCA', '#07CA88', '#10CAC0', '#5CCA9D', '#20b2aa'],
                //outputRange: ['#fff', '#000'],
                // white / blue / green / aqua / light green
            })
            const animatedStyle = {
                backgroundColor: interpolateColor,
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
            var MainComponent = <MainWrap/>
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

module.exports = Main;
