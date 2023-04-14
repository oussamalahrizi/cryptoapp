import {
  View,
  Text,
  Image,
  ActivityIndicator,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import icon from "../../../../assets/logo-loading.png";

import { Alert } from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import ThreeDotsLoading from "../../../Components/ThreeDotsLoading";
const Congratulations = () => {
  const navigation = useNavigation();
  useEffect(() => {
    //do something then update the onboard state
    /////////////////////
    const timeout = setTimeout(() => {
      Alert.alert(
        "Error!",
        "Something went wrong while trying to retrieve data.\nPlease try again later.",
        [
          {
            text: "OK",
            onPress: () => {
              BackHandler.exitApp();
              navigation.dispatch(StackActions.replace("FinalScreen"));
            },
          },
        ]
      );
    }, 6000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Image source={icon} style={styles.img} />
      </View>
      <View style={styles.upperView}>
        <Text style={{ color: "white", fontSize: 25, fontWeight: "500" }}>
          Congratulations!
        </Text>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 18,
            marginTop: 20,
            marginBottom: 100,
          }}
        >
          You've joined millions of others who have downloaded our wallets.
        </Text>
      </View>
      <View>
        <ActivityIndicator size={50} color={"white"} />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 100,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Creating wallet <ThreeDotsLoading />
        </Text>
      </View>
    </View>
  );
};

export default Congratulations;
