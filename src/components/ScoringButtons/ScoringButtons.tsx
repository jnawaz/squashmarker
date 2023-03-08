import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ScoringButtons.styles';

export type ScoringButtonProps = {
  homeButtons?: undefined | boolean;
  awayButtons?: undefined | boolean;
  incrementPoint: () => void;
  handout: () => void;
  let: () => void;
  stroke: () => void;
};

const ScoringButtons = (props: ScoringButtonProps) => {
  return (
    <View
      style={
        props.homeButtons
          ? styles.homeScoringContainer
          : styles.awayScoringContainer
      }>
      <TouchableOpacity
        style={styles.scoringButton}
        onPress={props.incrementPoint}>
        <Text style={styles.buttonText}>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scoringButton} onPress={props.handout}>
        <Text style={styles.buttonText}>Handout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scoringButton} onPress={props.let}>
        <Text style={styles.buttonText}>Let</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scoringButton} onPress={props.stroke}>
        <Text style={styles.buttonText}>Stroke</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScoringButtons;
