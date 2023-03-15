import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './ResetMatchButton.styles';

export type ResetMatchButtonProps = {
  onPress: () => void;
};
const ResetMatchButton = (props: ResetMatchButtonProps) => {
  return (
    <>
      <TouchableOpacity
        style={styles.resetButtonContainer}
        onPress={props.onPress}>
        <Text style={styles.resetButtonContainerText}>Reset Match</Text>
      </TouchableOpacity>
    </>
  );
};

export default ResetMatchButton;
