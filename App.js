import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import Routes from './src/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [onboard, setOnboard] = useState()

  const getStorage = async () => {
    const onboarded = await AsyncStorage.getItem('ONBOARDED');
    setOnboard(JSON.parse(onboarded));
  };

  useEffect(()=> {
    getStorage();
  }, [])
  return (
    <>
      <Routes onboard={onboard} />
      <StatusBar translucent={false} />
      </>
  );
}