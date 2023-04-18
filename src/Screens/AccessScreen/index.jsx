import {
  ActivityIndicator,
  Alert,
  BackHandler,
  DevSettings,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";

const AccessScreen = () => {
  useEffect(() => {
    Alert.alert(
      "Somehting Went Wrong",
      "This app is currently unavailable or under maintenance.\nPlease check later.",
      [
        {
          text: "OK",
          onPress: () => {
            BackHandler.exitApp();
            DevSettings.reload();
          },
        },
      ]
    );
  }, []);
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size={"large"} color={"black"} />
    </View>
  );
};

export default AccessScreen;
