import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ScoringButtons.styles';

const ScoringButtons = () => {
  return (
    <View style={styles.scoringButtonsContainer}>
      <TouchableOpacity style={styles.scoringButton}>
        <Text style={styles.buttonText}>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scoringButton}>
        <Text style={styles.buttonText}>Handout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scoringButton}>
        <Text style={styles.buttonText}>Let</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scoringButton}>
        <Text style={styles.buttonText}>Stroke</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScoringButtons;
