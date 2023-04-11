import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const FlatListItem = (props) => {
  const { title, img, description } = props.item;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity>
        <Text
          style={{
            textDecorationLine: "underline",
            fontSize: 15,
            color: "white",
          }}
        >
          Learn More
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlatListItem;
