import {StyleSheet} from 'react-native';
import {Colors} from '../../colors/Colors';

export const styles = StyleSheet.create({
  gameStateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  scoringContainer: {
    backgroundColor: Colors.primary,
    height: '100%',
  },
  scoringControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeScoreContainer: {
    width: '40%',
    backgroundColor: Colors.white,
    borderColor: Colors.secondary,
    borderWidth: 1,
    marginTop: 6,
    height: 120,
    borderRadius: 20,
    marginLeft: 12,
    marginRight: 12,
  },
  awayScoreContainer: {
    width: '40%',
    backgroundColor: Colors.white,
    borderColor: Colors.secondary,
    borderWidth: 1,
    marginTop: 6,
    height: 120,
    borderRadius: 20,
    marginLeft: 12,
    marginRight: 12,
  },
});
