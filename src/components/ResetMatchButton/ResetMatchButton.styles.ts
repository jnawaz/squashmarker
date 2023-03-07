import {StyleSheet} from 'react-native';
import {Colors} from '../../colors/Colors';

export const styles = StyleSheet.create({
  resetButtonContainer: {
    backgroundColor: Colors.red,
    width: '90%',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    // marginLeft: 40,
    // marginRight: 40,
    alignSelf: 'center',
  },
  resetButtonContainerText: {
    color: Colors.white,
    textAlign: 'center',
  },
});
