import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const ScoreControl = () => {
  return (
    <View>
      <View>
        <TouchableOpacity>
          <Text>Stroke</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Let</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <TouchableOpacity>
            <Text>Handout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ScoreControl;
