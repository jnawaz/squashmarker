import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './BaseTouchable.style';

export type BaseTouchableProps = {
  buttons: Array<BaseTouchableButtons>;
};

export type BaseTouchableButtons = {
  text: string;
  onPress: () => void;
};

const BaseTouchable = (props: BaseTouchableProps) => {
  let buttons: [object?] = [];
  props.buttons.forEach(function (button, index) {
    buttons.push(
      <TouchableOpacity
        style={styles.button}
        key={index}
        onPress={(props.buttons[index] as BaseTouchableButtons).onPress}>
        <Text style={styles.buttonText}>
          {(button as BaseTouchableButtons).text}
        </Text>
      </TouchableOpacity>,
    );
  });

  return (
    <>
      <SafeAreaView>
        {/* @ts-ignore */}
        <View style={styles.baseTouchableContainer}>{buttons}</View>
      </SafeAreaView>
    </>
  );
};

export default BaseTouchable;
