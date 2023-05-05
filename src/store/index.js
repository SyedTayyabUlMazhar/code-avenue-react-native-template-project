import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './reducers';
import {Sagas} from './sagas';

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
  RootReducer,
  {},
  applyMiddleware(
    // createLogger(),
    sagaMiddleware,
  ),
);

sagaMiddleware.run(Sagas);

export default Store;
