import {StyleSheet} from 'react-native';
import {Colors} from '../../colors/Colors';

export const styles = StyleSheet.create({
  homeScoringContainer: {
    alignContent: 'center',
    marginTop: 20,
    marginLeft: 16,
  },
  awayScoringContainer: {
    alignContent: 'center',
    marginTop: 20,
    marginRight: 16,
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
