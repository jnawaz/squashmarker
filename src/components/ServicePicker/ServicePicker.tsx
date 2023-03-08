import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ServicePicker.style';

export type ServicePickerProps = {
  homePlayerName: string;
  awayPlayerName: string;
};

const ServicePicker = (props: ServicePickerProps) => {
  return (
    <View>
      <Text>Please select server and which side they're serving from</Text>
      <View style={styles.servingPlayerContainer}>
        <TouchableOpacity>
          <Text>{props.homePlayerName}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>{props.awayPlayerName}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.serviceBoxContainer}>
        <TouchableOpacity>
          <Text>Left box</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Right Box</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServicePicker;
