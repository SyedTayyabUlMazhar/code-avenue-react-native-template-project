import {
  ADD_POST,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
  GET_POSTS,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  LOADER_FALSE,
  LOADER_TRUE,
  LOGOUT,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  SIGNIN,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
} from '../constants';

export default class AppAction {
  static SignIn(payload) {
    return {
      type: SIGNIN,
      payload,
    };
  }
  static SignInSuccess(payload) {
    return {
      type: SIGNIN_SUCCESS,
      payload,
    };
  }
  static SignInFailure() {
    return {
      type: SIGNIN_FAILURE,
    };
  }

  static Logout() {
    return {
      type: LOGOUT,
    };
  }
  static LogoutSuccess() {
    return {
      type: LOGOUT_SUCCESS,
    };
  }
  static LogoutFailure() {
    return {
      type: LOGOUT_FAILURE,
    };
  }

  static AddPost(payload) {
    return {
      type: ADD_POST,
      payload,
    };
  }
  static AddPostSuccess(payload) {
    return {
      type: ADD_POST_SUCCESS,
      payload,
    };
  }
  static AddPostFailure() {
    return {
      type: ADD_POST_FAILURE,
    };
  }

  static GetPosts() {
    return {
      type: GET_POSTS,
    };
  }
  static GetPostsSuccess(payload) {
    return {
      type: GET_POSTS_SUCCESS,
      payload,
    };
  }
  static GetPostsFailure() {
    return {
      type: GET_POSTS_FAILURE,
    };
  }

  static LoaderTrue() {
    return {
      type: LOADER_TRUE,
    };
  }
  static LoaderFalse() {
    return {
      type: LOADER_FALSE,
    };
  }
}
