/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer from './entertainment/filmSearch/redux/reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import { watchSearch } from './entertainment/filmSearch/saga/watcherSearch';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['reducerSearch'],
    whitelist: ['reducerFav']
  }
  const persistedReducer = persistReducer(persistConfig, reducer)
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(persistedReducer, applyMiddleware(logger,sagaMiddleware));
  sagaMiddleware.run(watchSearch);
  export const mypersistor = persistStore(store)
const AppContainer = () => <Provider store={store}>
    <PersistGate loading={null} persistor={mypersistor}>
        <App/>
        </PersistGate>
        </Provider>;
AppRegistry.registerComponent(appName, () => AppContainer);
