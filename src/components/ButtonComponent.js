import React from "react";
import { Pressable, StyleSheet, Dimensions } from "react-native";
import TextComponent from "./TextComponent";
const { width } = Dimensions.get("window");

const ButtonComponent = ({ onPress, title, style }) => {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
      android_ripple={{ color: "white" }}
    >
      <TextComponent size="s" textStyle="semibold" style={styles.text}>
        {title}
      </TextComponent>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#28AF6E",
    paddingVertical: 18,
    borderRadius: width < 380 ? 10 : 12,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default ButtonComponent;
