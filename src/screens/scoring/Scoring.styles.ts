import {StyleSheet} from 'react-native';
import {Colors} from '../../colors/Colors';

export const styles = StyleSheet.create({
  gameStateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  scoringContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
    height: '100%',
    width: '100%',
  },
  scoringControlsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: Colors.white,
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
  scoreControlsHome: {
    width: '50%',
    // flexDirection: 'column',
  },
  scoreControlsAway: {
    width: '50%',
  },
});
