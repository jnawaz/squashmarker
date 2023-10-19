import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export type PrimaryButtonProps = {
  text: string;
  onPress: () => void;
  disabled: boolean;
};

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <TouchableOpacity disabled={props.disabled} onPress={props.onPress}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
