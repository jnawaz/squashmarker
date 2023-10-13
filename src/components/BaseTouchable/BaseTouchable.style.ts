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
  disabledButtonText: {
    color: '#C0C0C07A',
  },
  isDisabled: {
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: Colors.secondaryDisabled,
  },
});
