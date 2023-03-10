import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ServicePicker.style';
import {ServiceBox} from '../../types/service-box/ServiceBox';

export type ServicePickerProps = {
  homePlayerName: string;
  awayPlayerName: string;
  isVisible: boolean;
  selectedPlayer: (playerName: string) => void;
  servingFrom: (servingFrom: ServiceBox) => void;
};

const ServicePicker = (props: ServicePickerProps) => {
  return props.isVisible ? (
    <View style={styles.pickServerContainer}>
      <Text style={styles.servicePickerHeading}>
        Please select server and which side they're serving from
      </Text>
      <View style={styles.servingPlayerContainer}>
        <TouchableOpacity
          style={styles.homePlayerButton}
          onPress={() => props.selectedPlayer(props.homePlayerName)}>
          <Text style={styles.buttonText}>{props.homePlayerName}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.awayPlayerButton}
          onPress={() => props.selectedPlayer(props.awayPlayerName)}>
          <Text style={styles.buttonText}>{props.awayPlayerName}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.serviceBoxContainer}>
        <TouchableOpacity
          style={styles.homePlayerButton}
          onPress={() => props.servingFrom(ServiceBox.Left)}>
          <Text style={styles.buttonText}>Left box</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.awayPlayerButton}
          onPress={() => props.servingFrom(ServiceBox.Right)}>
          <Text style={styles.buttonText}>Right Box</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : null;
};

export default ServicePicker;
