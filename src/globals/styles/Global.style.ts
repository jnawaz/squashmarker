import {StyleSheet} from 'react-native';
import {Colors} from '../../colors/Colors';

export const globalStyle = StyleSheet.create({
  textHeading: {
    color: Colors.white,
    fontSize: 24,
  },
  containerPadding: {
    margin: 12,
  },
  primaryButtonDisabled: {
    backgroundColor: Colors.secondaryDisabled,
    padding: 12,
    margin: 12,
    borderRadius: 8,
  },
  primaryButtonActive: {
    backgroundColor: Colors.secondary,
    padding: 12,
    margin: 12,
    borderRadius: 8,
  },
  primaryButtonText: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
    paddingTop: 6,
    paddingBottom: 6,
  },
});
