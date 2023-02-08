import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {globalStyle} from '../../globals/styles/Global.style';

export type PrimaryButtonProps = {
  text: string;
  onPress: () => void;
  disabled: boolean;
};

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      style={
        props.disabled
          ? globalStyle.primaryButtonDisabled
          : globalStyle.primaryButtonActive
      }
      disabled={props.disabled}
      onPress={props.onPress}>
      <Text style={globalStyle.primaryButtonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
