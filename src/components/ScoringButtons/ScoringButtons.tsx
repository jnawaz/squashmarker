import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ScoringButtons.styles';

const ScoringButtons = () => {
  return (
    <View style={styles.scoringButtonsContainer}>
      <TouchableOpacity style={styles.scoringButton}>
        <Text>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scoringButton}>
        <Text>Handout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scoringButton}>
        <Text>Let</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scoringButton}>
        <Text>Stroke</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScoringButtons;
