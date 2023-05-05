import React from 'react';
import {View} from 'react-native';
import {Metrix} from '../../config';

const Spacer = ({height = 10, width = 10}) => {
  return (
    <View
      style={{
        height: Metrix.VerticalSize(height),
        width: Metrix.HorizontalSize(width),
      }}
    />
  );
};

export default Spacer;
