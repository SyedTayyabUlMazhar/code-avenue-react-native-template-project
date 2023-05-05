import React, {useState} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {Button, Forminput, Header} from '../../components';
import {Metrix, NavigationService} from '../../config';
import {AppAction} from '../../store/actions';
import styles from './styles';

const AddPost = props => {
  const dispatch = useDispatch();

  const [bodyErrMsg, setBodyErrMsg] = useState('');
  const [titleErrMsg, setTitleErrMsg] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addPost = () => {
    if (!title && !body) setBodyErrMsg('Please fill all fields.');
    else if (!title) setTitleErrMsg('Please enter title.');
    else if (!body) setBodyErrMsg('Please add description.');
    else {
      dispatch(AppAction.AddPost({title, body}));
      setTitle('');
      setBody('');
    }
  };

  return (
    <View style={styles.container}>
      <Header.Standard
        leftIconName={'arrow-left'}
        onPressLeft={NavigationService.goBack}
        Heading={'Add Post'}
      />
      <KeyboardAwareScrollView
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        style={{width: '100%'}}>
        <View style={styles.content}>
          <Forminput.TextField
            placeholder="Title"
            returnKeyType="next"
            onChangeText={title => {
              setTitle(title);
              setTitleErrMsg('');
            }}
            value={title}
            blurOnSubmit={false}
            errMsg={titleErrMsg}
            containerStyle={{marginTop: Metrix.VerticalSize(25)}}
            onSubmitEditing={() => {
              this.bodyInputRef.focus();
            }}
          />
          <Forminput.TextArea
            placeholder="Description"
            // reference={(ref) => { this.bodyInputRef = ref }}
            onChangeText={body => {
              setBody(body);
              setBodyErrMsg('');
            }}
            errMsg={bodyErrMsg}
            value={body}
            containerStyle={{marginVertical: Metrix.VerticalSize(25)}}
          />

          <Button.Standard text="Add Post" onPress={addPost} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddPost;
