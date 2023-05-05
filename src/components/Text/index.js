import React from 'react';
import {Text} from 'react-native';

import {Colors, Fonts, Metrix} from '../../config';

function RegularText({
  fontFamily = Fonts['Montserrat-Regular'],
  fontSize = 14,
  color = Colors.Primary,
  textAlign = 'center',
  textDecorationLine = 'none',
  // textDecorationColor = Colors.Primary,
  textDecorationStyle = 'solid',
  text,
  style,
  ellipsizeMode = 'tail',
  numberOfLines = 5,
}) {
  return (
    <Text
      style={[
        {
          fontFamily,
          fontSize: Metrix.customFontSize(fontSize),
          color,
          textAlign,
          textDecorationLine,
          // textDecorationColor,
          textDecorationStyle,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}>
      {text}
    </Text>
  );
}

function BoldText({
  fontFamily = Fonts['Montserrat-Bold'],
  fontSize = 14,
  color = Colors.Primary,
  textAlign = 'center',
  textDecorationLine = 'none',
  // textDecorationColor = Colors.Primary,
  textDecorationStyle = 'solid',
  text,
  style,
  ellipsizeMode = 'tail',
  numberOfLines = 5,
}) {
  return (
    <Text
      style={[
        {
          fontFamily,
          fontSize: Metrix.customFontSize(fontSize),
          color,
          textAlign,
          textDecorationLine,
          // textDecorationColor,
          textDecorationStyle,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}>
      {text}
    </Text>
  );
}

function DarkText({
  fontFamily = Fonts['Poppins-Black'],
  fontSize = 1.5,
  color = Colors.Primary,
  textAlign = 'center',
  textDecorationLine = 'none',
  textDecorationColor = Colors.Primary,
  textDecorationStyle = 'solid',
  children,
  style,
}) {
  return (
    <Text
      style={[
        {
          fontFamily,
          fontSize: Metrix.customFontSize(fontSize),
          color,
          textAlign,
          textDecorationLine,
          textDecorationColor,
          textDecorationStyle,
        },
        style,
      ]}>
      {children}
    </Text>
  );
}

export default {RegularText, DarkText, BoldText};
