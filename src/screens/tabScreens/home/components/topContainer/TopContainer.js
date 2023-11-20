import { ImageBackground, StyleSheet, Image, View } from "react-native";
import React from "react";
import SearchComponent from "../../../../../components/SearchComponent";
import TextComponent from "../../../../../components/TextComponent";
const TopContainer = ({ style }) => {
  return (
    <View style={[styles.rootContainer, style]}>
      <ImageBackground
        source={require("../../../../../../assets/homeBackground.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.innerContainer}>
          <TextComponent size="s">Hi, plant lover!</TextComponent>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <TextComponent textStyle="medium">Good Afternoon!</TextComponent>
            <Image
              style={{
                width: 22,
                height: 22,
                bottom: 2,
                marginLeft: 5,
              }}
              resizeMode="contain"
              source={require("../../../../../../assets/cloudIcon.png")}
            />
          </View>
          <SearchComponent />
        </View>
      </ImageBackground>
    </View>
  );
};

export default TopContainer;

const styles = StyleSheet.create({
  innerContainer: {
    paddingHorizontal: 24,
    paddingTop: 30,
  },
});
