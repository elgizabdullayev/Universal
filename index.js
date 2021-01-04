/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './entertainment/filmSearch/redux/reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['reducer1'],
    whitelist: ['reducer2']
  }
  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStore(persistedReducer, applyMiddleware(logger,thunk));
  export const mypersistor = persistStore(store)
const AppContainer = () => <Provider store={store}>
    <PersistGate loading={null} persistor={mypersistor}>
        <App/>
        </PersistGate>
        </Provider>;
AppRegistry.registerComponent(appName, () => AppContainer);
