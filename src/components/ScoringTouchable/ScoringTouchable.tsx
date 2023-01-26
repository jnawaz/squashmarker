import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const ScoringTouchable = () => {
  return (
    <>
      <View>
        <TouchableOpacity>
          <Text>To 11</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>To 15</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>To 9</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ScoringTouchable;
