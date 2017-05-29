import React, {Component} from 'react';
import {QuizWrap} from './QuizWrap';
import StartQuizButton from './StartQuizButton';
import {shuffleArray} from '../Utils/helper';
import LinearGradient from 'react-native-linear-gradient';
import variables from '../Styles/Variables'
let {width, height} = Dimensions.get('window');
height = height - 50; // make space for bottom menu bar

import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
} from 'react-native';

const styles = StyleSheet.create({
    homeWrapOuter: {
        flex: 1,
    },
    homeWrap: {
        flex: 1,
        padding: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        //backgroundColor: 'rgba(32,178,170,0.85)', // background color behind squares
        backgroundColor: 'transparent', // background color behind squares
    },
    homeTextWrap: {
        position: 'absolute',
        zIndex: 333,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeText: {
        color: 'rgba(255,255,255,1)',
        fontSize: 90,
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 1, height: 1},
        fontFamily: 'Lalezar',
    },
    gridItem: {
        justifyContent: 'center',
        alignItems: 'center',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        margin: 1,
    },
    questionText: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#FFF',
        opacity: 0,
        //opacity: 1, // @todo remove
    },
    menuText: {
        fontSize: 27,
        fontFamily: 'Lalezar',
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: 'transparent',
    },
    menuBar: {
        height: 50,
        paddingTop: 10,
        paddingBottom: 5,
        //backgroundColor: 'rgba(255,255,255,0.2)',
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class Homepage extends Component {

    constructor(props) {
        super(props);

        const num_horizontal = 3; // 6
        const num_vertical = 6; // 10
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

            const fontSizeArray = [30, 40, 50, 60, 70, 80]
            const fontSizeItem = fontSizeArray[Math.floor(Math.random() * fontSizeArray.length)]
            const flexPosArray = ['flex-start', 'flex-end', 'center']
            const verticalPos = flexPosArray[Math.floor(Math.random() * flexPosArray.length)]
            const horizontalPos = flexPosArray[Math.floor(Math.random() * flexPosArray.length)]

            grid_styles_array.push({
                opacity: 0,
                fontSize: fontSizeItem,
                justifyContent: verticalPos,
                alignItems: horizontalPos
            });
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
        })
    }

    questionOpacityRecursive(array, length, i, old_i = null, shuffled) {

        if (i < ( length )) {

            setTimeout(() => {

                Animated.timing(this.animatedValue[i], {
                    toValue: 0.7,
                    duration: 400,
                }).start();

                array[shuffled[i]].opacity = this.animatedValue[i];

                if (old_i != null) {

                    Animated.timing(this.animatedValue[old_i], {
                        toValue: 0.5,
                        duration: 400,
                    }).start();

                    array[shuffled[old_i]].opacity = this.animatedValue[old_i];
                }

                this.setState({
                    background_array: array,
                })
                let oldster = i;
                i++;
                this.questionOpacityRecursive(array, length, i, oldster, shuffled);
            }, 600)


        } else {
            Animated.timing(this.animatedValue[old_i], {
                toValue: 0.5,
                duration: 400,
            }).start();

            array[shuffled[old_i]].opacity = this.animatedValue[old_i];
        }
    }

    componentDidMount() {
        let new_styles_array = this.state.grid_styles_array;

        let i = 0;
        this.questionOpacityRecursive(new_styles_array, new_styles_array.length, i, null, this.state.shuffled_grid_array);
    }

    startQuiz() {
        this.setState({
            started: true,
        })
    }

    render() {

        const grid = this.state.grid_array.map((item, key) => {

            const stylesView = {
                justifyContent: this.state.grid_styles_array[key].justifyContent,
                alignItems: this.state.grid_styles_array[key].alignItems
            }

            const stylesText = {
                opacity: this.state.grid_styles_array[key].opacity,
                fontSize: this.state.grid_styles_array[key].fontSize,
            }

            // let fontSizeItemArray = []
            // //const fontSize = () => {
            // const fontSizeArray = [30, 70]
            // fontSizeItemArray[key] = fontSizeArray[Math.floor(Math.random() * fontSizeArray.length)]
            // //return fontSizeItemArray
            // //}

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

        /**
         * Toggle MainComponent based on 'started' state
         * not using Redux for this component
         */
        if (this.state.started) {
            var MainComponent = <QuizWrap/>
        } else {
            var MainComponent = (
                <View style={styles.homeWrapOuter}>
                    <View style={styles.homeWrap}>
                        <View style={[styles.homeTextWrap, {width: width, height: height}]}>
                            <Text style={styles.homeText}>Quizian</Text>
                        </View>
                        {grid}
                    </View>
                    <View style={styles.menuBar}>
                        <StartQuizButton handleClick={() => this.startQuiz()} buttonText="NEW GAME"/>
                    </View>
                </View>
            );
        }

        return (
            <LinearGradient colors={variables.gradient} style={{flex: 1}}>
                {MainComponent}
            </LinearGradient>
        )
    }
}

module.exports = Homepage;
