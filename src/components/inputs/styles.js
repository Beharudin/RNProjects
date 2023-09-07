import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../assets/theme/theme';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  textInputWrapper: {
    paddingVertical: 12,
  },
  textInput: {
    flex: 1,
    width: '100%'
  },
  error: {
    color: COLORS.danger,
    paddingTop: 4,
    fontSize: SIZES.small,
  }
});
