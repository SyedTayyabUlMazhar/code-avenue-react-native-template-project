import React, {useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {
  Colors,
  Icons,
  Metrix,
  NavigationService,
  getCurrentLocation,
} from '../../config';

LATITUDE_DELTA = 0.005;
LONGITUDE_DELTA = 0.005;
DURATION = 2500;

const MapScreen = props => {
  const mapRef = useRef();
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  useEffect(() => {
    (async function () {
      const coordinates = await getCurrentLocation();
      setRegion({
        ...region,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      });
    })();
  }, []);

  const navigateToCurrentLocation = async () => {
    const coordinates = await getCurrentLocation();
    mapRef.current.animateToRegion(
      {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      DURATION,
    );
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => NavigationService.goBack()}
        style={styles.backButton}>
        <Icons.AntDesign style={styles.iconStyle} name={'arrowleft'} />
      </Pressable>

      <Pressable
        onPress={navigateToCurrentLocation}
        style={styles.currentLocationButton}>
        <Icons.MaterialIcons style={styles.iconStyle} name={'my-location'} />
      </Pressable>

      <MapView
        ref={mapRef}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton={false}
        // provider={PROVIDER_GOOGLE}
        region={region}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  backButton: {
    position: 'absolute',
    top: Metrix.VerticalSize(20),
    height: Metrix.VerticalSize(35),
    width: Metrix.VerticalSize(35),
    borderRadius: Metrix.VerticalSize(35) / 2,
    backgroundColor: Colors.DarkGray,
    zIndex: 1,
    left: Metrix.HorizontalSize(15),
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  iconStyle: {
    fontSize: Metrix.customFontSize(22),
    color: Colors.White,
  },
  currentLocationButton: {
    position: 'absolute',
    bottom: Metrix.VerticalSize(50),
    height: Metrix.VerticalSize(50),
    width: Metrix.VerticalSize(50),
    borderRadius: Metrix.VerticalSize(50) / 2,
    backgroundColor: Colors.DarkGray,
    zIndex: 1,
    right: Metrix.HorizontalSize(20),
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
});
