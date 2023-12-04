import React from 'react';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import {styles} from './style';

interface CommonButtonProps
  extends Omit<TouchableOpacityProps, 'style' | 'disabled'> {
  title: string;
  isDisabled?: boolean;
  buttonContainerStyle?: StyleProp<ViewStyle>;
}

export const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  buttonContainerStyle,
  isDisabled = false,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isDisabled && styles.buttonDisabled,
        buttonContainerStyle,
      ]}
      disabled={isDisabled}
      {...otherProps}>
      <Text style={{color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};
