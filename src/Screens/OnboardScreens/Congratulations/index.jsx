import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import icon from "../../../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Congratulations = () => {
  const navigation = useNavigation();
  useEffect(() => {
    //do something then update the onboard state
    /////////////////////
    //updating onboard state
    setTimeout(async () => {
      await AsyncStorage.setItem("@onboard", "false");
      navigation.dispatch(StackActions.replace("BackUpScreen"));
    }, 2000);
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
            marginTop: 15,
          }}
        >
          You've joined millions of others who have downloaded our wallets.
        </Text>
      </View>
      <View>
        <ActivityIndicator size={50} color={"white"} />
      </View>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Creating wallet...
        </Text>
      </View>
    </View>
  );
};

export default Congratulations;
