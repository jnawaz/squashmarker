import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ScoreIndicator.styles';

const ScoreIndicator = () => {
  return (
    <View>
      <Text style={styles.score}>0</Text>
    </View>
  );
};

export default ScoreIndicator;
