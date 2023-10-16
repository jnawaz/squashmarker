import {StyleSheet} from 'react-native';
import {Colors} from '../../colors/Colors';

export const styles = StyleSheet.create({
  gameScreenContainer: {
    backgroundColor: Colors.primary,
    height: '100%',
  },
  gameSetupViewContainer: {
    margin: 12,
  },
  playerNameField: {
    paddingLeft: 16,
    backgroundColor: Colors.white,
    height: 48,
    marginTop: 16,
    borderRadius: 8,
  },
});
