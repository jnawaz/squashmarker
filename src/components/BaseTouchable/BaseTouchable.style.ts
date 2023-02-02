import {StyleSheet} from 'react-native';
import {Colors} from '../../colors/Colors';

export const styles = StyleSheet.create({
  baseTouchableContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: Colors.secondary,
    padding: 12,
    marginRight: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: Colors.white,
  },
});
