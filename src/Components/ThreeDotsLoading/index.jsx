import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const ThreeDotsLoading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (dots.length === 1) {
        setDots("..");
      } else if (dots.length === 2) {
        setDots("...");
      } else if (dots.length === 3) {
        setDots("");
      } else {
        setDots(".");
      }
    }, 500);

    return () => clearInterval(interval);
  }, [dots]);

  return (
    <Text
      style={{
        fontSize: 20,
        color: "white",
      }}
    >
      {dots}
    </Text>
  );
};

export default ThreeDotsLoading;
