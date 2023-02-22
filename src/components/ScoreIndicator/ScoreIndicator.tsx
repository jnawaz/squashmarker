import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ScoreIndicator.styles';

const ScoreIndicator = () => {
  return (
    <View>
      <Text style={styles.score}>0</Text>
      <View style={styles.servingIndicatorContainer}>
        <Text>L</Text>
        <Text>R</Text>
      </View>
    </View>
  );
};

export default ScoreIndicator;
