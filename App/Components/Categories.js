import React, {Component} from 'react';
import styles from '../Styles/DefaultStyles'
import {
    View,
    Text,
} from 'react-native';

class Categories extends Component {

    render() {

        return (
            <View style={styles.categoriesWrap}>
                <Text>Text</Text>
            </View>
        )
    }
}

module.exports = Categories;
//export const QuizWrap = connect(mapStateToProps, mapActionsToProps)(_QuizWrap);
