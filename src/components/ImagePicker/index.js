import React, {useEffect, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ImagePicker = () => {
  const refRBSheet = useRef();
  useEffect(() => {
    refRBSheet.current.open();
  }, []);
  return (
    <RBSheet
      ref={refRBSheet}
      height={120}
      openDuration={250}
      customStyles={{
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: Colors.TextFieldColor,
        },
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => openCamera()}
          activeOpacity={0.8}>
          <Icon name={'camera'} color={'black'} size={26} />
          <Text style={{color: 'green'}}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignItems: 'center'}}
          activeOpacity={0.8}
          onPress={() => openGallery()}>
          <MaterialCommunityIcons
            name={'view-gallery'}
            color={'black'}
            size={26}
          />
          <Text style={{color: 'green'}}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

export default ImagePicker;
