import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Language from "../OnboardScreens/Language";
import Terms from "../OnboardScreens/Terms";
import GetStarted from "../OnboardScreens/GetStarted";
import FinalScreen from "../OnboardScreens/FinalScreen";
import Congratulations from "../OnboardScreens/Congratulations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigation } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";

const Onboarding = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Terms"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      
    </Stack.Navigator>
  );
};

export default Onboarding;
