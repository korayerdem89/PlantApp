import React from "react";
import { Pressable, Text, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const ButtonComponent = ({ onPress, title, style }) => {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
      android_ripple={{ color: "white" }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#28AF6E",
    paddingVertical: 0.024 * height,
    borderRadius: width < 380 ? 11 : 12,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default ButtonComponent;