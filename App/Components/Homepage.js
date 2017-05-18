import React, {Component} from 'react';
import {QuizWrap} from './QuizWrap';
import StartQuizButton from './StartQuizButton';
import {shuffleArray} from '../Utils/helper';
const {width, height} = Dimensions.get('window');

import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Easing
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
        fontSize: 42,
        //fontSize: 100,
        fontWeight: 'bold',
        //color: 'rgba(255,255,255,0.3)',
        color: 'white',
        opacity: 0,
    }
});

class Homepage extends Component {

    constructor(props) {
        super(props);

        const num_horizontal = 6; // 6
        const num_vertical = 10; // 10
        const total_grid_items = ( num_horizontal * num_vertical );
        const grid_array = [];
        for (i = 0; i < total_grid_items; i++) {
            grid_array.push(i);
        }
        const shuffled_grid_array = shuffleArray(grid_array);
        const item_width = ( ( ( width - 2 ) / num_horizontal ) - 2);
        const item_height = ( ( ( height - 2 ) / num_vertical ) - 2 );

        var grid_styles_array = [];
        for (i = 0; i < total_grid_items; i++) {
            grid_styles_array.push({bg: '#20b2aa', opacity: 0});
        }

        this.state = {
            started: false,
            grid_array: grid_array,
            shuffled_grid_array: shuffled_grid_array,
            grid_styles_array: grid_styles_array,
            item_width: item_width,
            item_height: item_height,
        }
    }

    componentWillMount() {
        this.animatedValue = [];
        this.animatedValueColor = [];
        this.state.grid_array.forEach((item) => {

            this.animatedValue[item] = new Animated.Value(0);
            this.animatedValueColor[item] = new Animated.Value(1);
        })
    }

    changeColorRecursive(array, length, i, old_i = null, shuffled) {

        if (i < ( length )) {

            setTimeout(() => {
                //array[shuffled_grid_array[i]].bg = '#19c3ba';


                Animated.timing(this.animatedValue[i], {
                    toValue: 0.7,
                    duration: 400,
                    //easing: Easing.bounce
                }).start();

                let interpolateColor = this.animatedValueColor[i].interpolate({
                    inputRange: [0, 1],
                    outputRange: ['#20b2aa', '#19c3ba'],
                })

                //array[shuffled[i]].bg = interpolateColor, // @todo this will change the square color
                array[shuffled[i]].opacity = this.animatedValue[i];

                if (old_i != null) {
                    //array[old_i].bg = '#20b2aa'


                    Animated.timing(this.animatedValue[old_i], {
                        toValue: 0.5,
                        duration: 400,
                        //easing: Easing.bounce
                    }).start();
                    let interpolateColorOld = this.animatedValueColor[old_i].interpolate({
                        inputRange: [0, 1],
                        //outputRange: ['#20b2aa', '#19c3ba'],
                        outputRange: ['#19c3ba', '#20b2aa'],
                    })

                    array[shuffled[old_i]].bg = interpolateColorOld;
                    array[shuffled[old_i]].opacity = this.animatedValue[old_i];

                }

                this.setState({
                    background_array: array,
                })
                let oldster = i;
                i++;
                this.changeColorRecursive(array, length, i, oldster, shuffled);
            }, 400)


        } else {
            console.log('finalize');
        }

    }

    componentDidMount() {
        // const animated_timing = this.state.grid_array.map((a) => {
        //     Animated.timing(this.animatedValue[a], {
        //         toValue: 9,
        //         duration: 10000,
        //     }).start()
        // });
        // Animated.stagger(5000, animated_timing);

        let new_styles_array = this.state.grid_styles_array;

        let i = 0;
        this.changeColorRecursive(new_styles_array, new_styles_array.length, i, null, this.state.shuffled_grid_array);

    }

    startQuiz() {
        this.setState({
            started: true,
        })
    }

    render() {

        const grid = this.state.grid_array.map((item, key) => {

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
                <Animated.View style={[styles.gridItem, {
                    width: this.state.item_width,
                    height: this.state.item_height
                }, stylesView]}
                               key={key}>
                    <Animated.Text style={[styles.questionText, stylesText]}>?</Animated.Text>
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
