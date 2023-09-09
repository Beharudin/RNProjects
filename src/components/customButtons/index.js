import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import {COLORS} from '../../assets/theme/theme';

const CustomButton = ({
  title,
  loading,
  disabled,
  primary,
  secondary,
  danger,
  onPress,
  style,
  ...props
}) => {
  const getBgColor = () => {
    if (disabled) return COLORS.gray;
    if (primary) return COLORS.primary;
    if (secondary) return COLORS.secondary;
    if (danger) return COLORS.danger;
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}, style]}>
      <View style={[styles.loadingIndicator]}>
        {loading && <ActivityIndicator color={COLORS.info} />}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : COLORS.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
