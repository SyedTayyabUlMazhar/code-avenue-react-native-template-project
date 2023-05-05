import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

const PressableComponent: React.FC<TouchableOpacityProps> = ({
  children,
  onPress = () => {},
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      {...props}
      style={[{alignItems: 'center', justifyContent: 'center'}, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default React.memo(PressableComponent);
