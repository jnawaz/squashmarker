import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ColorDefinitions} from '../../colors/Colors';

export type PrimaryButtonProps = {
  text: string;
  onPress: () => void;
  disabled: boolean;
};

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: ColorDefinitions.orange,
        borderRadius: 8,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        marginVertical: 24,
      }}
      disabled={props.disabled}
      onPress={props.onPress}>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'TitilliumWeb-SemiBold',
          fontSize: 18,
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
