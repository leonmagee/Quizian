import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { vw } from '../Utils/helper';
import { QuizWrap } from './QuizWrap';
import Stats from './Stats';
import Credits from './Credits';
import StartQuizButton from './StartQuizButton';
import variables from '../Styles/Variables';
/**
 * @todo remove this
 */

let { width, height } = Dimensions.get('window');
height -= 50; // make space for bottom menu bar

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null, // allows centering of content with image - otherwise image width is imported
    height: null,
  },
  mainOuterWrap: {
    flex: 1,
    width,
  },
  homeWrapOuter: {
    flex: 1,
  },
  homeWrap: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
  },
  homeTextWrap: {
    position: 'absolute',
    zIndex: 333,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    color: 'rgba(255,255,255,1)',
    fontSize: 26 * vw,
    fontWeight: '400',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    fontFamily: 'Lalezar-Regular',
  },
  menuText: {
    fontSize: 27,
    fontFamily: 'Lalezar-Regular',
    fontWeight: '400',
    color: '#FFF',
    backgroundColor: 'transparent',
  },
  menuBar: {
    position: 'absolute',
    height: 50,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 0,
    width,
  },
});

class HomepageImage extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     started: false,
  //   };
  // }

  render() {
    /**
     * Insert Credits page here...
     */

    let MainComponent = <View />;

    if (this.props.creditsPage) {
      MainComponent = <Credits />;
    } else if (this.props.statsPage) {
      MainComponent = <Stats />;
    } else if (this.props.quizStarted) {
      MainComponent = (
        <LinearGradient colors={variables.gradient} style={{ flex: 1 }}>
          <QuizWrap />
        </LinearGradient>
      );
    } else {
      MainComponent = (
        <View style={styles.homeWrapOuter}>
          <View style={styles.homeWrap}>
            <Image
              source={require('../Assets/Images/home-image-books.png')}
              style={styles.imageContainer}
            />
            <View style={[styles.homeTextWrap, { width, height }]}>
              <Text style={styles.homeText}>Quizian</Text>
            </View>
            <View style={styles.menuBar}>
              <StartQuizButton
                handleClick={() => this.props.startQuiz()}
                buttonText="RANDOM  GAME"
              />
              <StartQuizButton
                handleClick={() => this.props.startQuizChoose()}
                buttonText="CHOOSE  GAME"
              />
              <StartQuizButton
                handleClick={() => this.props.goToStats()}
                buttonText="STATS"
              />
              <StartQuizButton
                handleClick={() => this.props.goToCredits()}
                buttonText="CREDITS"
              />
            </View>
          </View>
        </View>
      );
    }

    return <View style={styles.mainOuterWrap}>{MainComponent}</View>;
  }
}

const mapStateToProps = state => ({
  quizStarted: state.quizStarted,
  statsPage: state.statsPage,
  creditsPage: state.creditsPage,
});

const mapActionsToProps = dispatch => ({
  startQuiz() {
    dispatch({ type: 'START_QUIZ' });
  },
  startQuizChoose() {
    dispatch({ type: 'START_QUIZ_CHOOSE' });
  },
  goToStats() {
    dispatch({ type: 'STATS_PAGE' });
  },
  goToCredits() {
    dispatch({ type: 'CREDITS_PAGE' });
  },
});

module.exports = connect(
  mapStateToProps,
  mapActionsToProps
)(HomepageImage);
