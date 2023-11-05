import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../colors/Colors';

export const style = StyleSheet.create({
  container: {flex: 1},
  serviceBoxIndicatorText: {
    marginHorizontal: 24,
    marginBottom: 16,
    color: ColorDefinitions.green500,
  },
  playerNameBelowScoreBox: {
    marginTop: 16,
    textAlign: 'center',
    color: ColorDefinitions.white,
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 18,
  },
  scoreAndServiceContainer: {
    flex: 1,
    backgroundColor: ColorDefinitions.green400,
    borderRadius: 12,
    marginTop: 8,
  },
  serviceIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
