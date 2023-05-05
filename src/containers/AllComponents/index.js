import React from 'react';
import {View} from 'react-native';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {
  Button,
  CustomText,
  Forminput,
  Header,
  PressableComponent,
} from '../../components';
import {
  Icons,
  NavigationService,
  getCurrentLocation,
  openCamera,
  openLibrary,
  showToast,
} from '../../config';
import styles from './styles';

const COMPONENTS_DATA = [
  {
    title: 'Open Camera',
    icon: 'camera',
    onPress: openCamera,
    isComponent: false,
  },
  {
    title: 'Open Gallery',
    icon: 'picture',
    onPress: openLibrary,
    isComponent: false,
  },
  {
    title: 'Access Location',
    icon: 'enviroment',
    onPress: () => getCurrentLocation(true),
    isComponent: false,
  },
  {
    title: 'Map View',
    icon: 'flag',
    onPress: () => NavigationService.navigate('MapScreen'),
    isComponent: false,
  },
  {
    title: 'Success Toast',
    icon: 'bells',
    onPress: () => showToast('success', 'This is toast'),
    isComponent: false,
  },
  {
    title: 'Error Toast',
    icon: 'bells',
    onPress: () => showToast('error', 'This is toast'),
    isComponent: false,
  },
  {
    component: <Forminput.TextField placeholder="This is text field" />,
    isComponent: true,
  },
  {
    component: <Forminput.TextArea placeholder="This is textarea" />,
    isComponent: true,
  },
  {component: <Button.Standard text="This is Button" />, isComponent: true},
];

const AllComponents = props => {
  const renderItem = ({item}) => {
    if (!item.isComponent) {
      return (
        <PressableComponent
          onPress={item?.onPress}
          style={styles.pressableItems}>
          <Icons.AntDesign style={styles.icon} name={item?.icon} />
          <CustomText.RegularText style={styles.title} text={item?.title} />
        </PressableComponent>
      );
    } else {
      return <View style={styles.componentView}>{item.component}</View>;
    }
  };

  return (
    <View style={styles.container}>
      <Header.Standard
        leftIconName={'arrow-left'}
        onPressLeft={NavigationService.goBack}
        Heading={'Components'}
      />

      <KeyboardAwareFlatList
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}
        numColumns={4}
        columnWrapperStyle={styles.flatcolumnWrapperStyle}
        data={COMPONENTS_DATA}
        style={styles.flatlist}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainerStyle}
      />
    </View>
  );
};

export default AllComponents;
