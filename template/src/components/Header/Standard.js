import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from '../../config';
import styles from './styles';

const Standard = ({
  Heading,
  leftIconName,
  leftIconComp,
  onPressLeft,
  rightIconName,
  rightIconComp,
  onPressRight,
}) => (
  <View style={styles.mainView}>
    {onPressLeft && (
      <TouchableOpacity onPress={onPressLeft} style={styles.iconView}>
        {leftIconComp || (
          <Icon name={leftIconName} color={Colors.Text} size={26} />
        )}
      </TouchableOpacity>
    )}

    <Text style={styles.headingStyle}>{Heading}</Text>

    <TouchableOpacity onPress={onPressRight} style={styles.iconView}>
      {rightIconComp || rightIconName ? (
        <Icon name={rightIconName} color={Colors.Text} size={26} />
      ) : (
        <View style={styles.dummyView} />
      )}
    </TouchableOpacity>
  </View>
);

export default React.memo(Standard);
