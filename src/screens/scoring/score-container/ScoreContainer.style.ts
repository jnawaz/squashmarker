import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../colors/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: ColorDefinitions.green600,
    marginHorizontal: 16,
    padding: 24,
    borderRadius: 12,
    marginTop: 24,
    gap: 24,
  },
});
