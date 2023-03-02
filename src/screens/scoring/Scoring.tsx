import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './Scoring.styles';
import ScoreIndicator from '../../components/ScoreIndicator/ScoreIndicator';
import ScoringButtons from '../../components/ScoringButtons/ScoringButtons';

const Scoring = () => {
  return (
    <SafeAreaView style={styles.scoringContainer}>
      <View style={styles.gameStateContainer}>
        <View style={styles.homeScoreContainer}>
          <ScoreIndicator />
        </View>
        <View style={styles.awayScoreContainer}>
          <ScoreIndicator />
        </View>
      </View>
      <View style={styles.scoringControlsContainer}>
        <View style={styles.scoreControlsHome}>
          <ScoringButtons />
        </View>
        <View style={styles.scoreControlsAway}>
          <ScoringButtons />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Scoring;
