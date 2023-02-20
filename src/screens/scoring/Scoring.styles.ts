import {StyleSheet} from 'react-native';
import {Colors} from '../../colors/Colors';

export const styles = StyleSheet.create({
  gameStateContainer: {
    flexDirection: 'row',
  },
  scoringContainer: {
    backgroundColor: Colors.primary,
    height: '100%',
  },
  scoringControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  playerScoreContainer: {
    width: '50%',
    // borderWidth: 1,
    // borderColor: Colors.white,
  },
});
