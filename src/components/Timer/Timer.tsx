import React from 'react';
import {ColorDefinitions} from '../../colors/Colors';
import {Text} from 'react-native';

const Timer = () => {
  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 24,
          color: ColorDefinitions.white,
        }}>
        34m: 20s
      </Text>
    </>
  );
};

export default Timer;
