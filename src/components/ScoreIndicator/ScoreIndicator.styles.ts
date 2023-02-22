import {StyleSheet} from 'react-native';
import {Colors} from '../../colors/Colors';

export const styles = StyleSheet.create({
  score: {
    marginTop: 18,
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'center',
  },
  servingIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
  },
});
