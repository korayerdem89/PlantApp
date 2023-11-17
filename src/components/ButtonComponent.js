import React from "react";
import { Pressable, Text, StyleSheet, Platform } from "react-native";

const ButtonComponent = ({ onPress, title }) => {
  return (
    <Pressable
      style={styles.button}
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
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default ButtonComponent;
