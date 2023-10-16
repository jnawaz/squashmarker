import {StyleSheet} from 'react-native';
import {Colors} from '../../colors/Colors';

export const styles = StyleSheet.create({
  pickServerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  servingPlayerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  servicePickerHeading: {
    color: Colors.white,
    textAlign: 'center',
    // marginBottom: ,
  },
  homePlayerButton: {
    backgroundColor: Colors.secondary,
    padding: 12,
    marginLeft: 12,
    width: '45%',
    borderRadius: 8,
    marginTop: 16,
  },
  awayPlayerButton: {
    backgroundColor: Colors.secondary,
    padding: 12,
    marginRight: 12,
    width: '45%',
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
  },
});
