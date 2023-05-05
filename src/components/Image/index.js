import React from 'react';
import FastImage from 'react-native-fast-image';

import {Metrix} from '../../config';

const resizeModeBuilder = mode => {
  switch (mode) {
    case 'contain':
      return FastImage.resizeMode.contain;
    case 'cover':
      return FastImage.resizeMode.cover;
    case 'stretch':
      return FastImage.resizeMode.stretch;
    case 'center':
      return FastImage.resizeMode.center;
    default:
      return FastImage.resizeMode.contain;
  }
};

const Image = ({
  width = 20,
  height = 20,
  imageStyle,
  networkImage,
  localImage,
  resizeMode,
}) => (
  <FastImage
    style={[
      {
        width: Metrix.HorizontalSize(width),
        height: Metrix.VerticalSize(height),
      },
      imageStyle,
    ]}
    source={localImage != null ? localImage : {uri: networkImage}}
    resizeMode={resizeModeBuilder(resizeMode)}
  />
);

export default Image;
