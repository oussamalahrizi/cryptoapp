import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import icon from "../../../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";
const FinalScreen = () => {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    navigation.navigate("Congratulations");
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
          <Text style={styles.textbtn}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity>
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
