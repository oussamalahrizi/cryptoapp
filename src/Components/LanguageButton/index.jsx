import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";

const LanguageButton = ({ value, checked, onpress, image }) => {
  return (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={onpress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{value}</Text>
      </View>
      <View style={styles.outer}>
        {checked && <View style={styles.inner} />}
      </View>
    </TouchableOpacity>
  );
};

export default LanguageButton;
