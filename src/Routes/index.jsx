import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from "../Screens/MainStack";
import Onboarding from "../Screens/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, Text, TouchableOpacity, View } from "react-native";
import logo from "../../assets/logo.png";
import help from "../../assets/others/help.png";
import { SimpleLineIcons } from "@expo/vector-icons";

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
        <Stack.Navigator>
          {onboard && (
            <Stack.Screen
              options={{ headerShown: false }}
              name="Onboarding"
              component={Onboarding}
            />
          )}
          <Stack.Screen
            options={{
              headerLeft: () => (
                <View>
                  <Image
                    source={logo}
                    style={{ width: 50, height: 50, resizeMode: "contain" }}
                  />
                </View>
              ),
              headerRight: () => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity>
                    <Image
                      source={help}
                      style={{ width: 50, height: 50, resizeMode: "contain" }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <SimpleLineIcons name="menu" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              ),
              headerTitle: () => <></>,
            }}
            name="MainStack"
            component={MainStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default Routes;
