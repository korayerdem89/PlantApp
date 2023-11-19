import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BottomContainer = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text>BottomContainer</Text>
    </View>
  );
};

export default BottomContainer;

const styles = StyleSheet.create({});
