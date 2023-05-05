import {all, takeLatest} from 'redux-saga/effects';
import {ADD_POST, GET_POSTS, LOGOUT, SIGNIN} from '../constants';
import {AppMiddleware} from '../middlewares';

export function* Sagas() {
  yield all([
    yield takeLatest(SIGNIN, AppMiddleware.SignIn),
    yield takeLatest(ADD_POST, AppMiddleware.AddPost),
    yield takeLatest(GET_POSTS, AppMiddleware.GetPosts),
    yield takeLatest(LOGOUT, AppMiddleware.Logout),
  ]);
}
