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

const initialState = {
  user: {},
  loader: false,
  posts: [],
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      state = {
        ...state,
        loader: true,
      };
      break;
    case SIGNIN_SUCCESS:
      state = {
        ...state,
        user: action.payload,
        loader: false,
      };
      break;
    case SIGNIN_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

    case LOGOUT:
      state = {
        ...state,
        loader: true,
      };
      break;
    case LOGOUT_SUCCESS:
      state = {
        user: {},
        posts: [],
        loader: false,
      };
      break;
    case LOGOUT_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

    case ADD_POST:
      state = {
        ...state,
        loader: true,
      };
      break;
    case ADD_POST_SUCCESS:
      // state.posts.unshift(action.payload)
      state = {
        ...state,
        posts: [action.payload, ...state.posts],
        loader: false,
      };
      break;
    case ADD_POST_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

    case GET_POSTS:
      state = {
        ...state,
        loader: true,
      };
      break;
    case GET_POSTS_SUCCESS:
      state = {
        ...state,
        posts: action.payload,
        loader: false,
      };
      break;
    case GET_POSTS_FAILURE:
      state = {
        ...state,
        loader: false,
      };
      break;

    case LOADER_TRUE:
      state = {
        ...state,
        loader: true,
      };
      break;

    case LOADER_FALSE:
      state = {
        ...state,
        loader: false,
      };
      break;

    default:
      break;
  }

  return state;
}
