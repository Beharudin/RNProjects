import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import styles from './styles';
import {COLORS} from '../../../assets/theme/theme';

const Message = ({
  message,
  onDismiss,
  retry,
  retryFn,
  primary,
  danger,
  info,
  success,
}) => {
  const [userDismissed, setDismissed] = React.useState(false);

  const getBgColor = () => {
    if (primary) {
      return COLORS.primary;
    }
    if (danger) {
      return COLORS.danger;
    }
    if (success) {
      return COLORS.success;
    }

    if (info) {
      return COLORS.secondary;
    }
  };
  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.white,
              }}>
              {message}
            </Text>

            {retry && typeof onDismiss !== 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: COLORS.white,
                  }}>
                  Retry
                </Text>
              </TouchableOpacity>
            )}

            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismissed(true);
                  onDismiss();
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
