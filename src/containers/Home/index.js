import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Header} from '../../components';
import {AppAction} from '../../store/actions';
import styles from './styles';

const Home = props => {
  const dispatch = useDispatch();

  const posts = useSelector(state => state.AppReducer.posts);

  useEffect(() => {
    dispatch(AppAction.GetPosts());
  }, []);

  renderItem = ({item}) => {
    return (
      <View style={styles.itemView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.bodyText}>{item.body}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header.Standard
        rightIconName={'log-out'}
        Heading={'Home'}
        onPressRight={() => dispatch(AppAction.Logout())}
      />
      <FlatList
        data={posts}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainerStyle}
      />
      <Button.FloatingButton
        onPress={() => {
          props.navigation.navigate('AddPost');
        }}
      />
    </View>
  );
};

export default Home;
