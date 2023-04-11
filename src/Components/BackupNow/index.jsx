import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const BackupNow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Text style={styles.title}>Your Jaxx Liberty is not backed up!</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.lower}>
        <Text style={styles.description}>
          Without recording your back up phrase your assets coule be lost
          forever
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.btn}>Back Up Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BackupNow;
