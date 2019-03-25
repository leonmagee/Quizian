import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import StatsButton from './StatsButton';
import { vh } from '../Utils/helper';

const { width } = Dimensions.get('window');
const wrapWidth = width * 0.8;
const wrapMargin = width * 0.1;
const mainBackground = '#FCFCFC';

const LinearAnimate = Animated.createAnimatedComponent(LinearGradient);

const styles = StyleSheet.create({
  outerWrap: {
    flex: 1,
    // justifyContent: 'center',
    justifyContent: 'space-between',
  },
  headerWrap: {
    backgroundColor: mainBackground,
    paddingTop: 45,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 26,
    color: '#111',
    fontWeight: 'bold',
    // fontFamily: 'Lalezar-Regular',
  },
  headerText2: {
    fontSize: 12,
    color: '#555',
    fontWeight: 'bold',
    paddingTop: 8,
    // fontFamily: 'Lalezar-Regular',
  },
  mainWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    backgroundColor: mainBackground,
  },
  graphWrap: {
    width: wrapWidth,
    backgroundColor: '#EAEAEA',
    margin: wrapMargin,
  },
  barGradient: {
    // height: 50,
    height: vh * 5,
  },
  labelWrap: {
    backgroundColor: mainBackground,
    paddingTop: 12,
    paddingBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
    // fontFamily: 'Lalezar-Regular',
  },
  menuBar: {
    // height: 50,
    paddingTop: 10,
    paddingBottom: 25,
    backgroundColor: mainBackground,
    // backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const gradients = [
  ['#fe6e53', '#FC5130'],
  ['#1ff879', '#04E762'],
  ['#fc27ad', '#F00699'],
  ['#36d3fd', '#00C9FF'],
  ['#f6525e', '#E63946'],
];

class Stats extends Component {
  constructor() {
    super();

    const totalPercents = [
      {
        label: 'SPORTS',
        percent: 0,
      },
      {
        label: 'HISTORY',
        percent: 0,
      },
      {
        label: 'TV/MOVIES',
        percent: 0,
      },
      {
        label: 'MUSIC',
        percent: 0,
      },
      {
        label: 'GEOGRAPHY',
        percent: 0,
      },
    ];

    this.state = {
      sports_true: 0,
      sports_false: 0,
      history_true: 0,
      history_false: 0,
      entertainment_true: 0,
      entertainment_false: 0,
      music_true: 0,
      music_false: 0,
      geography_true: 0,
      geography_false: 0,
      barWidth: [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
      ],
      totalPercents,
    };
  }

  setDataFromStorage() {
    if (this.state.sports_true || this.state.sports_false) {
      if (!this.state.sports_false) {
        const totalPerc = this.state.totalPercents;
        totalPerc[0].percent = 100;
        this.setState({
          totalPercents: totalPerc,
        });
      } else if (this.state.sports_true) {
        const sportsTotal = this.state.sports_true + this.state.sports_false;
        const sportsPercent = (this.state.sports_true / sportsTotal) * 100;
        const sportsPercentFinal = sportsPercent.toFixed(0);
        const totalPerc = this.state.totalPercents;
        totalPerc[0].percent = sportsPercentFinal;
        this.setState({
          totalPercents: totalPerc,
        });
      }
    }

    if (this.state.history_true || this.state.history_false) {
      if (!this.state.history_false) {
        const totalPerc = this.state.totalPercents;
        totalPerc[1].percent = 100;
        this.setState({
          totalPercents: totalPerc,
        });
      } else if (this.state.history_true) {
        const historyTotal = this.state.history_true + this.state.history_false;
        const historyPercent = (this.state.history_true / historyTotal) * 100;
        const historyPercentFinal = historyPercent.toFixed(0);
        const totalPerc = this.state.totalPercents;
        totalPerc[1].percent = historyPercentFinal;
        this.setState({
          totalPercents: totalPerc,
        });
      }
    }

    if (this.state.entertainment_true || this.state.entertainment_false) {
      if (!this.state.entertainment_false) {
        const totalPerc = this.state.totalPercents;
        totalPerc[2].percent = 100;
        this.setState({
          totalPercents: totalPerc,
        });
      } else if (this.state.entertainment_true) {
        const entertainmentTotal =
          this.state.entertainment_true + this.state.entertainment_false;
        const entertainmentPercent =
          (this.state.entertainment_true / entertainmentTotal) * 100;
        const entertainmentPercentFinal = entertainmentPercent.toFixed(0);
        const totalPerc = this.state.totalPercents;
        totalPerc[2].percent = entertainmentPercentFinal;
        this.setState({
          totalPercents: totalPerc,
        });
      }
    }

    if (this.state.music_true || this.state.music_false) {
      if (!this.state.music_false) {
        const totalPerc = this.state.totalPercents;
        totalPerc[3].percent = 100;
        this.setState({
          totalPercents: totalPerc,
        });
      } else if (this.state.music_true) {
        const musicTotal = this.state.music_true + this.state.music_false;
        const musicPercent = (this.state.music_true / musicTotal) * 100;
        const musicPercentFinal = musicPercent.toFixed(0);
        const totalPerc = this.state.totalPercents;
        totalPerc[3].percent = musicPercentFinal;
        this.setState({
          totalPercents: totalPerc,
        });
      }
    }

    if (this.state.geography_true || this.state.geography_false) {
      if (!this.state.geography_false) {
        const totalPerc = this.state.totalPercents;
        totalPerc[4].percent = 100;
        this.setState({
          totalPercents: totalPerc,
        });
      } else if (this.state.geography_true) {
        const geographyTotal =
          this.state.geography_true + this.state.geography_false;
        const geographyPercent =
          (this.state.geography_true / geographyTotal) * 100;
        const geographyPercentFinal = geographyPercent.toFixed(0);
        const totalPerc = this.state.totalPercents;
        totalPerc[4].percent = geographyPercentFinal;
        this.setState({
          totalPercents: totalPerc,
        });
      }
    }

    this.state.totalPercents.map((i, k) => {
      Animated.timing(this.state.barWidth[k], {
        toValue: wrapWidth * (i.percent / 100),
        // toValue: wrapWidth * 0.3,
        duration: 400,
      }).start();
    });
  }

  componentDidMount() {
    const asyncKeysInit = [
      'sports_true',
      'sports_false',
      'history_true',
      'history_false',
      'entertainment_true',
      'entertainment_false',
      'music_true',
      'music_false',
      'geography_true',
      'geography_false',
    ];

    const asyncKeys = [];
    asyncKeysInit.map((i, k) => {
      const keyNew = `@QuestionAnswers:${i}`;
      asyncKeys.push(keyNew);
    });

    AsyncStorage.multiGet(asyncKeys, (err, stores) => {
      this.setState({
        sports_true: Number(stores[0][1]),
        sports_false: Number(stores[1][1]),
        history_true: Number(stores[2][1]),
        history_false: Number(stores[3][1]),
        entertainment_true: Number(stores[4][1]),
        entertainment_false: Number(stores[5][1]),
        music_true: Number(stores[6][1]),
        music_false: Number(stores[7][1]),
        geography_true: Number(stores[8][1]),
        geography_false: Number(stores[9][1]),
      });
    }).then(() => {
      this.setDataFromStorage();
    });
  }

  render() {
    const barGraphs = this.state.totalPercents.map((i, k) => (
      <View key={k}>
        <View style={styles.labelWrap}>
          <Text style={styles.labelText}>{i.label}</Text>
          <Text style={styles.labelText}>{i.percent}%</Text>
        </View>
        <LinearAnimate
          colors={gradients[k]}
          style={[styles.barGradient, { width: this.state.barWidth[k] }]}
        />
      </View>
    ));

    return (
      <View style={styles.outerWrap}>
        <View style={styles.headerWrap}>
          <Text style={styles.headerText}>YOUR STATISTICS</Text>
          <Text style={styles.headerText2}>PERCENTAGE OF CORRECT ANSWERS</Text>
        </View>
        <View style={styles.mainWrap}>
          <View style={styles.graphWrap}>{barGraphs}</View>
        </View>
        <View style={styles.menuBar}>
          <StatsButton
            handleClick={() => this.props.startQuiz()}
            buttonText="NEW GAME"
          />
          <StatsButton
            handleClick={() => this.props.goToHome()}
            buttonText="HOME"
          />
        </View>
      </View>
    );
  }
}

mapStateToProps = state => ({
  // quizStarted: state.quizStarted,
  // statsPage: state.statsPage,
});

mapActionsToProps = dispatch => ({
  startQuiz() {
    dispatch({ type: 'START_QUIZ' });
  },
  goToHome() {
    dispatch({ type: 'QUIZ_RESET' });
  },
});

module.exports = connect(
  mapStateToProps,
  mapActionsToProps
)(Stats);

// module.exports = Stats
