import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../assets/theme/theme';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  loadingIndicator:{
    flexDirection: 'row'
  }
});
