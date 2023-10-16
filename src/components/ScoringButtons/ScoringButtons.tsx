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
  disableButton: boolean;
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
        disabled={props.disableButton}
        testID={'incrementPointButton'}
        style={[
          styles.scoringButton,
          props.disableButton ? {opacity: 0.5} : null,
        ]}
        onPress={props.incrementPoint}>
        <Text style={styles.buttonText}>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID={'handoutButton'}
        style={styles.scoringButton}
        onPress={props.handout}>
        <Text style={styles.buttonText}>Handout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={props.disableButton}
        testID={'letButton'}
        style={[
          styles.scoringButton,
          props.disableButton ? {opacity: 0.5} : null,
        ]}
        onPress={props.let}>
        <Text style={styles.buttonText}>Let</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={props.disableButton}
        testID={'strokeButton'}
        style={[
          styles.scoringButton,
          props.disableButton ? {opacity: 0.5} : null,
        ]}
        onPress={props.stroke}>
        <Text style={styles.buttonText}>Stroke</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScoringButtons;
