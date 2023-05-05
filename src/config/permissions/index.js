import {Alert, Linking, Platform} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  check,
  checkMultiple,
  openSettings,
  request,
  requestMultiple,
} from 'react-native-permissions';

/* We are redirecting iOS user to directly app settings 
and for android it redirect user to directly app settings by default */

const redirectToSettings = () => {
  if (Platform.OS == 'ios') return Linking.openURL('app-settings:');

  return Linking.openSettings();
};

/* Generic Alert Box */

const showAlertBox = featureType => {
  /* if certain feature is not available in device */
  if (featureType == 'N/A')
    return alert('This feature is not available in your device');

  /* -- */

  return Alert.alert(
    `This feature requires ${featureType} access`,
    `Go to settings and and allow ${featureType} permissions to proceed`,
    [
      {text: 'Open Settings', onPress: async () => redirectToSettings()},
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
};

/* --------------------- CAMERA PERMISSION CODE ------------------*/

const checkCameraPermission = async cb => {
  const result = await check(
    Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA,
    }),
  );
  switch (result) {
    case RESULTS.UNAVAILABLE:
      showAlertBox('N/A');
      break;

    case RESULTS.DENIED:
      requestCameraPermission(cb);
      break;

    case RESULTS.BLOCKED:
      showAlertBox('camera');
      break;

    case RESULTS.LIMITED:
    case RESULTS.GRANTED:
      cb();
      break;
  }
};

const requestCameraPermission = async cb => {
  const result = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA,
    }),
  );
  switch (result) {
    case RESULTS.BLOCKED:
      showAlertBox('camera');
      break;

    case RESULTS.LIMITED:
    case RESULTS.GRANTED:
      cb();
      break;
  }
};

/* --------------------- END ------------------*/

/* --------------------- PHOTO GALLERY PERMISSION CODE ------------------*/

const checkPhotoGalleryPermission = async cb => {
  const result = await check(
    Platform.select({
      android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    }),
  );

  switch (result) {
    case RESULTS.UNAVAILABLE:
      showAlertBox('N/A');
      break;

    case RESULTS.DENIED:
      requestPhotoGalleryPermission(cb);
      break;

    case RESULTS.BLOCKED:
      showAlertBox(
        Platform.OS == 'android' ? 'media storage' : 'photo gallery',
      );
      break;

    case RESULTS.LIMITED:
    case RESULTS.GRANTED:
      cb();
      break;
  }
};

const requestPhotoGalleryPermission = async cb => {
  const result = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    }),
  );

  switch (result) {
    case RESULTS.BLOCKED:
      showAlertBox(
        Platform.OS == 'android' ? 'media storage' : 'photo gallery',
      );
      break;

    case RESULTS.LIMITED:
    case RESULTS.GRANTED:
      cb();
      break;
  }
};

/* --------------------- END ------------------*/

/* --------------------- LOCATION PERMISSION CODE ------------------*/

const multiplePermissionLocation =
  Platform.OS == 'android'
    ? [
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ]
    : [PERMISSIONS.IOS.LOCATION_ALWAYS, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE];

const checkLocationPermission = async cb => {
  const result = await checkMultiple(multiplePermissionLocation);

  // For Android Permissions
  if (Platform.OS == 'android') {
    if (
      result['android.permission.ACCESS_FINE_LOCATION'] == RESULTS.GRANTED ||
      // result["android.permission.ACCESS_COARSE_LOCATION"] == RESULTS.GRANTED ||
      result['android.permission.ACCESS_FINE_LOCATION'] == RESULTS.LIMITED
      // result["android.permission.ACCESS_COARSE_LOCATION"] == RESULTS.LIMITED
    ) {
      cb();
    } else if (
      result['android.permission.ACCESS_FINE_LOCATION'] == RESULTS.DENIED ||
      result['android.permission.ACCESS_COARSE_LOCATION'] == RESULTS.DENIED
    ) {
      requestLocationPermission();
    } else if (
      result['android.permission.ACCESS_FINE_LOCATION'] == RESULTS.BLOCKED ||
      result['android.permission.ACCESS_COARSE_LOCATION'] == RESULTS.BLOCKED
    ) {
      showAlertBox('location');
    } else if (
      result['android.permission.ACCESS_FINE_LOCATION'] ==
        RESULTS.UNAVAILABLE ||
      result['android.permission.ACCESS_COARSE_LOCATION'] == RESULTS.UNAVAILABLE
    ) {
      showAlertBox('N/A');
    }
  }

  // For iOS Permissions
  else if (Platform.OS == 'ios') {
    if (
      result['ios.permission.LOCATION_ALWAYS'] == RESULTS.GRANTED ||
      result['ios.permission.LOCATION_WHEN_IN_USE'] == RESULTS.GRANTED ||
      result['ios.permission.LOCATION_ALWAYS'] == RESULTS.LIMITED ||
      result['ios.permission.LOCATION_WHEN_IN_USE'] == RESULTS.LIMITED
    ) {
      cb();
    } else if (
      result['ios.permission.LOCATION_ALWAYS'] == RESULTS.DENIED ||
      result['ios.permission.LOCATION_WHEN_IN_USE'] == RESULTS.DENIED
    ) {
      requestLocationPermission(cb);
    } else if (
      result['ios.permission.LOCATION_ALWAYS'] == RESULTS.BLOCKED ||
      result['ios.permission.LOCATION_WHEN_IN_USE'] == RESULTS.BLOCKED
    ) {
      showAlertBox('location');
    } else if (
      result['ios.permission.LOCATION_ALWAYS'] == RESULTS.UNAVAILABLE ||
      result['ios.permission.LOCATION_WHEN_IN_USE'] == RESULTS.UNAVAILABLE
    ) {
      showAlertBox('N/A');
    }
  }
};

const requestLocationPermission = async cb => {
  const result = await requestMultiple(multiplePermissionLocation);

  // For Android Permissions
  if (Platform.OS == 'android') {
    if (
      result['android.permission.ACCESS_FINE_LOCATION'] == RESULTS.GRANTED ||
      result['android.permission.ACCESS_COARSE_LOCATION'] == RESULTS.GRANTED
    ) {
      cb();
    }

    if (
      result['android.permission.ACCESS_FINE_LOCATION'] == RESULTS.BLOCKED ||
      result['android.permission.ACCESS_COARSE_LOCATION'] == RESULTS.BLOCKED
    ) {
      showAlertBox('location');
    }
  } else if (Platform.OS == 'ios') {
    if (
      result['ios.permission.LOCATION_ALWAYS'] == RESULTS.GRANTED ||
      result['ios.permission.LOCATION_WHEN_IN_USE'] == RESULTS.GRANTED
    ) {
      cb();
    } else if (
      result['ios.permission.LOCATION_ALWAYS'] == RESULTS.BLOCKED ||
      result['ios.permission.LOCATION_WHEN_IN_USE'] == RESULTS.BLOCKED
    ) {
      showAlertBox('location');
    }
  }
};

/* --------------------- END ------------------*/

/* --------------------- CONTACT ACCESS PERMISSION CODE ------------------*/

const checkContactPermission = async () => {
  const result = await check(
    Platform.select({
      android: PERMISSIONS.ANDROID.READ_CONTACTS,
      ios: PERMISSIONS.IOS.CONTACTS,
    }),
  );
  switch (result) {
    case RESULTS.UNAVAILABLE:
      console.log(
        'This feature is not available (on this device / in this context)',
      );
      break;
    case RESULTS.DENIED:
      requestContactPermission();
    case RESULTS.GRANTED:
      console.log('The permission is granted');
      break;
    case RESULTS.BLOCKED:
      Alert.alert(
        `Contact Access Denied`,
        `Go to settings and and enable contact list  for this app.`,
        [
          {
            text: 'Open Settings',
            onPress: async () => {
              openSettings();
            },
          },
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
      console.log('The permission is denied and not requestable anymore');
      break;
  }
  return result === RESULTS.GRANTED;
};

const requestContactPermission = async () => {
  const result = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.READ_CONTACTS,
      ios: PERMISSIONS.IOS.CONTACTS,
    }),
  );
  switch (result) {
    case RESULTS.UNAVAILABLE:
      console.log(
        'This feature is not available (on this device / in this context)',
      );
      break;
    case RESULTS.DENIED:
      checkContactPermission();
    case RESULTS.GRANTED:
      console.log('The permission is granted');
      break;
    case RESULTS.BLOCKED:
      Alert.alert(
        `Contact Access Denied`,
        `Go to settings and and enable contact list for this app.`,
        [
          {
            text: 'Open Settings',
            onPress: async () => {
              openSettings();
            },
          },
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
      console.log('The permission is denied and not requestable anymore');
      break;
  }
  return result === RESULTS.GRANTED;
};

/* --------------------- END ------------------*/

export {
  checkCameraPermission,
  checkPhotoGalleryPermission,
  checkLocationPermission,
  checkContactPermission,
};
