import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ScoreIndicator.styles';
import {ServiceBox} from '../../types/service-box/ServiceBox';

export type ScoreIndicatorProps = {
  points: number;
  serviceBox: ServiceBox | undefined;
  isServing: boolean;
  scoreTestId: string;
  serviceLeftIndicatorTestId: string;
  serviceRightIndicatorTestId: string;
};

const ScoreIndicator = (props: ScoreIndicatorProps) => {
  return (
    <View>
      <Text style={styles.score}>{props.points}</Text>
      {props.isServing && (
        <View style={styles.servingIndicatorContainer}>
          {
            <Text
              style={
                props.serviceBox === ServiceBox.Right
                  ? styles.transparentIndicator
                  : null
              }>
              L
            </Text>
          }
          {
            <Text
              style={
                props.serviceBox === ServiceBox.Left
                  ? styles.transparentIndicator
                  : null
              }>
              R
            </Text>
          }
        </View>
      )}
    </View>
  );
};

export default ScoreIndicator;
