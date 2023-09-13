import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/theme/theme';

export default StyleSheet.create({
  wrapper: {
    height: 42,

    paddingHorizontal: 5,

    paddingVertical: 13,

    marginVertical: 5,
    borderRadius: 4,
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
  },

  loaderSection: {
    flexDirection: 'row',
  },

  textInput: {
    flex: 1,
    width: '100%',
  },

  error: {
    color: COLORS.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
