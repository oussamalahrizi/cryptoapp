import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import Routes from './src/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/redux/store';
import { getOnboard } from './src/redux/Screen';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <StatusBar translucent={false} />
      </Provider>
  );
}
