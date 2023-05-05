import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import {Modal, Platform, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Metrix} from '../../config';

const DatePicker = ({
  visible = false,
  date = new Date(),
  dateChange,
  onClose = () => {},
  value = '',
}) => {
  return (
    <>
      {Platform.OS === 'ios' ? (
        <Modal visible={visible} transparent={true} activeOpacity={1}>
          <View
            onPress={onClose}
            style={{
              backgroundColor: Colors.BlackOpacity(),
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: Metrix.HorizontalSize(20),
            }}>
            <View
              style={{
                backgroundColor: 'white',
                paddingBottom: Metrix.VerticalSize(20),
                borderRadius: Metrix.VerticalSize(5),
              }}>
              {visible && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  //   maximumDate={date}
                  mode={'date'}
                  is24Hour={true}
                  display="spinner"
                  onChange={dateChange}
                />
              )}
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  marginRight: Metrix.HorizontalSize(50),
                  marginTop: Metrix.VerticalSize(10),
                }}>
                <TouchableOpacity
                  // activeOpacity={0.9}
                  style={{
                    marginLeft: Metrix.HorizontalSize(25),
                  }}>
                  <Text
                    onPress={() => onClose()}
                    style={{
                      color: 'black',
                      fontSize: Metrix.customFontSize(20),
                      fontWeight: 'bold',
                      // padding: 10
                    }}>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      ) : (
        visible && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            //   maximumDate={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={dateChange}
          />
        )
      )}
    </>
  );
};

export default React.memo(DatePicker);
