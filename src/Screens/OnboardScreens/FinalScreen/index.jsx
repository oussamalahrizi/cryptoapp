import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import icon from "../../../../assets/logo-finalScreen.png";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setScreen } from "../../../redux/Screen";
const FinalScreen = ({ finale }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleGetStarted = () => {
    dispatch(setScreen("first"));
    navigation.navigate("BackUpScreen");
  };

  return (
    <View style={styles.container}>
      <View />
      <View style={styles.upperView}>
        <Image source={icon} style={styles.img} />
        <Text style={styles.title}>Your Gateway to all things Crypto</Text>
      </View>
      <View style={styles.lowerView}>
        <TouchableOpacity onPress={handleGetStarted}>
          <Text style={styles.textbtn}>Back Up Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGetStarted}>
          <Text
            style={{
              color: "white",
              textDecorationLine: "underline",
              fontSize: 18,
            }}
          >
            Restore Interface
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FinalScreen;
