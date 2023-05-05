import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {Colors} from './src/config';
import Route from './src';
import {ToastComponent} from './src/components';

const App = () => {
  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={Colors.Primary} barStyle="light-content" />
      {/* <Loader /> */}
      <Route />
      <ToastComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: Colors.Secondary},
});

export default App;
