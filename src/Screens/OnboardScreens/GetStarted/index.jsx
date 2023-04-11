import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Swiper from "react-native-swiper";
import image1 from "../../../../assets/svgs/image1.png";
import image2 from "../../../../assets/svgs/image2.png";
import image3 from "../../../../assets/svgs/image3.png";
import image4 from "../../../../assets/svgs/image4.png";
import image5 from "../../../../assets/svgs/image5.png";
import english from "../../../lang/en";
import FlatListItem from "../../../Components/FlatListItem";
import { useNavigation } from "@react-navigation/native";

const GetStarted = () => {
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();
  const handleContinue = () => {
    navigation.navigate("FinalScreen");
  };
  const data = [
    {
      id: 1,
      img: image1,
      title: english.getStarted.first.title,
      description: english.getStarted.first.description,
    },
    {
      id: 2,
      img: image2,
      title: english.getStarted.second.title,
      description: english.getStarted.first.description,
    },
    {
      id: 3,
      img: image3,
      title: english.getStarted.third.title,
      description: english.getStarted.first.description,
    },
    {
      id: 4,
      img: image4,
      title: english.getStarted.fourth.title,
      description: english.getStarted.first.description,
    },
    {
      id: 5,
      img: image5,
      title: english.getStarted.fifth.title,
      description: english.getStarted.first.description,
    },
  ];

  const handleIndexChanged = (index) => {
    index === 4 ? setDisabled(false) : setDisabled(true);
  };
  return (
    <View style={styles.bigContainer}>
      <View style={styles.swiper}>
        <Swiper
          onIndexChanged={handleIndexChanged}
          paginationStyle={{ marginTop: 10, bottom: 100 }}
          loop={false}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          {data.map((item) => {
            return (
              <View key={item.id}>
                <FlatListItem item={item} />
              </View>
            );
          })}
        </Swiper>
      </View>
      <TouchableOpacity
        onPress={handleContinue}
        style={[
          styles.btn,
          disabled
            ? { backgroundColor: "gray" }
            : { backgroundColor: "#EF712D" },
        ]}
        disabled={disabled}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;
