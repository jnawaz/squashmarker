import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ScoreIndicator.styles';
import {ServiceBox} from '../../types/service-box/ServiceBox';

export type ScoreIndicatorProps = {
  points: number;
  serviceBox: ServiceBox | undefined;
  isServing: boolean;
};

const ScoreIndicator = (props: ScoreIndicatorProps) => {
  return (
    <View>
      <Text style={styles.score}>{props.points}</Text>
      {props.isServing && (
        <View style={styles.servingIndicatorContainer}>
          {props.serviceBox === ServiceBox.Left && <Text>L</Text>}
          {props.serviceBox === ServiceBox.Right && <Text>R</Text>}
        </View>
      )}
    </View>
  );
};

export default ScoreIndicator;
