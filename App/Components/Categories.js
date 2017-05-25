import React, {Component} from 'react';
import styles from '../Styles/DefaultStyles'
import variables from '../Styles/Variables'
import LinearGradient from 'react-native-linear-gradient';
import {
    View,
    Text,
    Dimensions,
} from 'react-native';
let {width, height} = Dimensions.get('window');
//height = height - 50; // make space for bottom menu bar
import Svg, {
    Circle,
} from 'react-native-svg';


const tv_svg = "M420.135,110.203H280.091l49.728-81.594c4.312-7.074,2.072-16.304-5.002-20.615c-7.073-4.313-16.304-2.072-20.615,5.002l-59.243,97.207h-36.916L148.8,12.996c-4.311-7.072-13.541-9.312-20.615-5.002c-7.074,4.312-9.314,13.541-5.002,20.615l49.728,81.594H32.865C14.743,110.203,0,124.946,0,143.067v271.271c0,18.121,14.743,32.864,32.865,32.864h387.271c18.122,0,32.865-14.743,32.865-32.864V143.067C453,124.946,438.257,110.203,420.135,110.203z M317.677,374.912c0,9.866-7.998,17.865-17.865,17.865H71.188c-9.866-0.001-17.864-7.999-17.864-17.865V182.494c0-9.866,7.998-17.865,17.865-17.865h228.623c9.866,0,17.865,7.999,17.865,17.865V374.912z M383.792,369.203c-17.093,0-31-13.907-31-31c0-17.094,13.907-31,31-31c17.093,0,31,13.906,31,31S400.885,369.203,383.792,369.203z M383.792,250.203c-17.093,0-31-13.906-31-31s13.907-31,31-31c17.093,0,31,13.906,31,31S400.885,250.203,383.792,250.203z";


class Categories extends Component {

    constructor() {
        super();
        console.log('working so far?');

        this.state = {
            tv_movie_styles: {
                //backgroundColor: variables.brandSecond,
                backgroundColor: 'transparent',
            }
        }
    }

    componentDidMount() {
        //this.flickerColor();
    }

    changeColor() {
        const new_color = {backgroundColor: variables.brandSecond}

        this.setState({
            tv_movie_styles: new_color,
        })

        setTimeout(
            () => this.transparentColor(),
            300
        )
    }

    transparentColor() {
        const new_color = {backgroundColor: 'transparent'}

        this.setState({
            tv_movie_styles: new_color,
        })

        setTimeout(
            () => this.changeColor(),
            300
        )
    }

    flickerColor() {
        //const color_change = setTimeout(this.changeColor(), 500)
        setTimeout(
            () => this.changeColor(),
            1500
        )
        //this.changeColor();
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

        // const grid = grid_array.map((item, key) => {
        //
        //     return (
        //         <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}
        //               key={key}><Text style={styles.categoriesText}>xxx</Text></View>
        //     )
        // })

        return (
            <LinearGradient colors={variables.gradient} style={{flex: 1}}>
                <View style={styles.categoriesWrap}>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}></Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}></Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}>Sports</Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}></Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}></Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}></Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}>Music</Text>
                    </View>
                    <View style={[styles.categoriesBox, {
                        width: item_width,
                        height: item_height
                    }, this.state.tv_movie_styles]}>
                        <Text style={styles.categoriesText}>TV / Movies</Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}>History</Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}></Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}></Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}></Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}>Geography</Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}></Text>
                    </View>
                    <View style={[styles.categoriesBox, {width: item_width, height: item_height}]}>
                        <Text style={styles.categoriesText}></Text>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

module.exports = Categories;