import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

type ScoringTouchableProps = {
  onAmericanScoringPressed: () => void | undefined;
  onEnglishScoringPressed: () => void | undefined;
};

const ScoringTouchable = (props: ScoringTouchableProps) => {
  return (
    <>
      <View>
        <TouchableOpacity onPressIn={props.onAmericanScoringPressed}>
          <Text>American Scoring</Text>
        </TouchableOpacity>
        <TouchableOpacity onPressIn={props.onEnglishScoringPressed}>
          <Text>English Scoring</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ScoringTouchable;
