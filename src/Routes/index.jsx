import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../Screens/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackUpScreen from "../Screens/BackUpScreen";
import FinalScreen from "../Screens/OnboardScreens/FinalScreen";
import Congratulations from "../Screens/OnboardScreens/Congratulations";
import { app } from "../firebaseconfig";
import { getFirestore, getDoc, doc } from "firebase/firestore/lite";
import AccessScreen from "../Screens/AccessScreen";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const [onboard, setOnboard] = useState(null);
  const [show, setShow] = useState(null);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#091D42",
    },
  };
  const getData = async () => {
    const value = await AsyncStorage.getItem("@onboard");
    if (value != null) {
      setOnboard(false);
      AsyncStorage.setItem("@onboard", "false");
    } else {
      setOnboard(true);
    }
  };

  const getAccess = async () => {
    const db = getFirestore(app);
    const docRef = doc(db, "access", "state");
    const docSnap = await getDoc(docRef);
    const value = docSnap.data().value;
    setShow(value);
  };

  useEffect(() => {
    getData();
    getAccess();
  }, []);
  return (
    onboard != null &&
    show != null && (
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {show && (
            <Stack.Screen name="AccessScreen" component={AccessScreen} />
          )}
          {onboard && <Stack.Screen name="Onboarding" component={Onboarding} />}
          <Stack.Screen name="FinalScreen" component={FinalScreen} />
          <Stack.Screen name="BackUpScreen" component={BackUpScreen} />
          <Stack.Screen name="Congratulations" component={Congratulations} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default Routes;
