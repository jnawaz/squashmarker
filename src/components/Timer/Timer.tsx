import React, {useEffect, useRef, useState} from 'react';
import {ColorDefinitions} from '../../colors/Colors';
import {Text} from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 24,
          color: ColorDefinitions.white,
        }}>
        {minutes < 10 ? '0' + minutes : minutes}:{remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}
      </Text>
    </>
  );
};

export default Timer;
