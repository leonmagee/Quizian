import React, {Component} from 'react';
import styles from '../Styles/DefaultStyles'
import variables from '../Styles/Variables'
import LinearGradient from 'react-native-linear-gradient';
import SvgElement from './SvgElement';
import television from '../SVG/television';
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
                        <Text style={styles.categoriesText}>
                            <SvgElement svg_data={television}/>
                            TV & Movies
                        </Text>
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