import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/theme/theme';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},

  imageView: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },

  chooseText: {
    color: COLORS.primary,
    textAlign: 'center',
  },
});
