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
  ...props
}) => {
  const getBgColor = () => {
    if (disabled) return COLORS.gray;
    if (primary) return COLORS.primary;
    if (secondary) return COLORS.secondary;
    if (danger) return COLORS.danger;
  };

  return (
    <TouchableOpacity style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={[styles.loadingIndicator]}>
        {loading && <ActivityIndicator color={COLORS.info} />}
        {title && (
          <Text
            style={{
              color: disabled ? COLORS.black : COLORS.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
