import React, { useEffect, useRef, useState } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
  StackActions,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../Screens/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { SimpleLineIcons } from "@expo/vector-icons";
import BackUpScreen from "../Screens/BackUpScreen";
import FinalScreen from "../Screens/OnboardScreens/FinalScreen";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../redux/Screen";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#091D42",
    },
  };
  const [onboard, setOnboard] = useState(null);
  const getData = async () => {
    const value = await AsyncStorage.getItem("@onboard");
    if (value != null) {
      setOnboard(false);
      AsyncStorage.setItem("@onboard", "false");
    } else {
      setOnboard(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    onboard != null && (
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {onboard && <Stack.Screen name="Onboarding" component={Onboarding} />}
          <Stack.Screen name="FinalScreen" component={FinalScreen} />
          <Stack.Screen name="BackUpScreen" component={BackUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default Routes;
