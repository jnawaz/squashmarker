import {StyleSheet} from 'react-native';
import { ColorDefinitions } from "../colors/Colors";
export const Typography = StyleSheet.create({
  h2: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 24,
    lineHeight: 38.8,
  },
  h3: {
    fontFamily: 'TitilliumWeb-SemiBold',
    fontSize: 16,
    lineHeight: 25.9,
  },
  button: {
    color: ColorDefinitions.orange,
    fontFamily: 'TitilliumWeb-SemiBold',
    fontSize: 16,
  },
});
