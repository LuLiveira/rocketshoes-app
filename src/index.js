import React from 'react';
import {StatusBar} from 'react-native';

import './config/Reactotron';

import Container from './styles/global';
import {Provider} from 'react-redux';
import store from './store/index';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Routes />
    </Provider>
  );
}
