import {StyleSheet} from 'react-native';
import {FontStyle} from '@react-native-segmented-control/segmented-control';
import {ColorDefinitions} from '../../colors/Colors';

export const segmentStyle = StyleSheet.create({});

export const segmentControlFont: FontStyle = {
  fontSize: 16,
  fontFamily: 'TitilliumWeb-Regular',
  color: '#000000',
};

export const activeControlFont: FontStyle = {
  fontSize: 16,
  fontFamily: 'TitilliumWeb-Regular',
  color: ColorDefinitions.white,
};
