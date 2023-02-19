import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './Scoring.styles';
import ScoreIndicator from '../../components/ScoreIndicator/ScoreIndicator';

const Scoring = () => {
  return (
    <SafeAreaView style={styles.scoringContainer}>
      <View style={styles.gameStateContainer}>
        <View>
          <ScoreIndicator />
        </View>
        <View>
          <ScoreIndicator />
        </View>
      </View>
      <View style={styles.scoringControlsContainer}>
        <View>
          <Text>left controls</Text>
        </View>
        <View>
          <Text>right controls</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Scoring;
