import {StyleSheet} from 'react-native';
import {Colors} from '../../colors/Colors';

export const styles = StyleSheet.create({
  scoringButtonsContainer: {
    alignContent: 'center',
    marginTop: 20,
  },
  scoringButton: {
    width: 160,
    backgroundColor: Colors.secondary,
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
  },
});
