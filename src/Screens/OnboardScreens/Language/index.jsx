import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import usa from "../../../../assets/countries/usa.png";
import fr from "../../../../assets/countries/fr.png";
import ksa from "../../../../assets/countries/ksa.png";
import logo from "../../../../assets/icon.png";
import LanguageButton from "../../../Components/LanguageButton";
import { useNavigation } from "@react-navigation/native";
const languages = [
  {
    image: usa,
    country: "English",
  },
  {
    image: ksa,
    country: "العربية",
  },
  {
    image: fr,
    country: "Français",
  },
];

const Language = () => {
  const navigation = useNavigation();
  const handleConfirm = () => navigation.navigate("GetStarted");
  const [checked, setChecked] = useState("English");
  return (
    <View style={styles.container}>
      <View>
        <View style={{ alignItems: "center" }}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.choose}>Select a language</Text>
        </View>
        <View style={styles.langContainer}>
          {languages.map((e) => (
            <LanguageButton
              key={e.country}
              checked={checked === e.country ? true : false}
              value={e.country}
              image={e.image}
              onpress={() => setChecked(e.country)}
            />
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.continuebtn} onPress={handleConfirm}>
        <Text style={styles.continuetxt}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Language;
