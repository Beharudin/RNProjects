import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {COLORS} from '../../assets/theme/theme';

const Inputs = ({
  onChangeText,
  icon,
  style,
  value,
  label,
  iconPosition,
  error,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getIconPosition = () => {
    if (icon && iconPosition == 'left') {
      return 'row';
    } else if (icon && iconPosition == 'right') {
      return 'row-reverse';
    }
  };
  const getBorderColor = () => {
    if (error) return COLORS.danger;
    if (focused) return COLORS.primary;
    else return COLORS.gray;
  };
  return (
    <View style={styles.textInputWrapper}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {flexDirection: getIconPosition(), borderColor: getBorderColor()},
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Inputs;
