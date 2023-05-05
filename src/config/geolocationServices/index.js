import {Alert} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {checkLocationPermission} from '../permissions';

const GEO_CONFIG = {
  enableHighAccuracy: false,
};

export const getCurrentLocation = async (showAlert = false) => {
  return new Promise((res, rej) => {
    checkLocationPermission(() => {
      /* getCurrentPosition takes 3 parameters, 
             1 is success callback,
             2 is error callback,
             3 is configuration object */

      Geolocation.getCurrentPosition(
        position => {
          let {latitude, longitude} = position.coords;

          /* Below showAlert code can be removed. It has no affect over functionality 
                its just showing coordinates to showcase this feature */
          if (showAlert) {
            Alert.alert(
              'Geolocation Coordinates',
              `Your coordinates are ${latitude} , ${longitude}`,
            );
          }

          res({latitude, longitude});
        },

        err => rej(err.code, err.message),
        GEO_CONFIG,
      );
    });
  });
};
