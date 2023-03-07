import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './ResetMatchButton.styles';

const ResetMatchButton = () => {
  return (
    <>
      <TouchableOpacity style={styles.resetButtonContainer}>
        <Text style={styles.resetButtonContainerText}>Reset Match</Text>
      </TouchableOpacity>
    </>
  );
};

export default ResetMatchButton;
