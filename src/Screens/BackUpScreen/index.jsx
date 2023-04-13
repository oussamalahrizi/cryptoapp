import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../../redux/Screen";
import { Ionicons } from "@expo/vector-icons";
import incognito from "../../../assets/others/incognito.png";

const Backupfirst = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Backup Phrase</Text>
      <Text style={styles.description}>
        Type in 12-word backup phrase in the correct order to pair your Jaxx
        Libery Wallet.
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => dispatch(setScreen("second"))}
      >
        <Text style={styles.btnText}>Enter Backup Phrase</Text>
      </TouchableOpacity>
    </View>
  );
};
const Backupsecond = ({ dispatch }) => {
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 20,
        flex: 1,
        alignItems: "center",
        gap: 10,
      }}
    >
      <Image
        source={incognito}
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      />
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "300",
          textAlign: "center",
        }}
      >
        Enter Backup Phrase in Private
      </Text>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          marginTop: 10,
          fontSize: 16,
        }}
      >
        Anyone with your 12-word backup can access your funds. Make sure you
        enter your backup phrase in private.
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 50,
        }}
        activeOpacity={0.8}
        onPress={() => dispatch(setScreen("third"))}
      >
        <Text
          style={{
            marginVertical: 10,
            color: "white",
            paddingVertical: 15,
            paddingHorizontal: 50,
            backgroundColor: "#FF6903",
            borderRadius: 5,
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Backupthird = () => {
  const [phrase, setPhrase] = useState("");

  const handleRestore = () => {
    Alert.alert("Jaxx Libery Wallet", "", [{ text: "OK" }]);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 15,
        marginHorizontal: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: 300,
          textAlign: "center",
        }}
      >
        Enter Backup Phrase
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 15,
          textAlign: "center",
        }}
      >
        Type in your 12-word Backup Phrase in the correct order to pair your
        Jaxx Liberty Wallet.
      </Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: "#B2BCD4",
          fontSize: 13,
          marginTop: 30,
          width: "100%",
          color: "white",
        }}
        cursorColor={"white"}
        onChangeText={(e) => setPhrase(e.toLowerCase())}
        value={phrase}
      />

      <TouchableOpacity
        style={{ marginTop: 100 }}
        disabled={phrase === "" ? true : false}
        activeOpacity={0.8}
        onPress={handleRestore}
      >
        <Text
          style={{
            backgroundColor: phrase === "" ? "gray" : "#FF6903",
            marginVertical: 10,
            color: "white",
            paddingVertical: 15,
            paddingHorizontal: 50,
            borderRadius: 5,
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          Restore Wallet
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const BackUpScreen = () => {
  const screen = useSelector((state) => state.screen.name);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          paddingVertical: 15,
          paddingHorizontal: 10,
          gap: 5,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            screen === "second"
              ? dispatch(setScreen("first"))
              : screen === "third"
              ? dispatch(setScreen("second"))
              : screen == "first" && navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={24} color="gray" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, color: "gray" }}>
          Pair/Restore Jaxx Libery Wallet
        </Text>
      </View>
      {screen === "first" ? (
        <Backupfirst />
      ) : screen == "second" ? (
        <Backupsecond dispatch={dispatch} />
      ) : (
        <Backupthird dispatch={dispatch} />
      )}
    </>
  );
};

export default BackUpScreen;
