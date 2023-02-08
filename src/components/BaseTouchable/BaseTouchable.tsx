import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './BaseTouchable.style';
import {
  BaseTouchableButtons,
  BaseTouchableProps,
} from '../../types/base-touchable/BaseTouchable';

const BaseTouchable = (props: BaseTouchableProps) => {
  let buttons: [object?] = [];
  props.buttons.forEach(function (button, index) {
    buttons.push(
      <TouchableOpacity
        style={button.isDisabled ? styles.isDisabled : styles.button}
        key={index}
        onPress={(props.buttons[index] as BaseTouchableButtons).onPress}
        testID={button.testId}>
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
