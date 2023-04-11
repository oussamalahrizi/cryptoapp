import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackupNow from "../../Components/BackupNow";
import { SafeAreaView } from "react-native";

const MainStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <BackupNow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
