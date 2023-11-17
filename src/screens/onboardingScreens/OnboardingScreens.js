import { StyleSheet, ImageBackground, View, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import React from "react";
import ButtonComponent from "../../components/ButtonComponent";
import TextComponent from "../../components/TextComponent";
const { width, height } = Dimensions.get("window");

const OnboardingScreens = () => {
  return (
    <ImageBackground
      source={require("../../../assets/OnboardingBackgrounds/getStarted_bg.png")}
      style={styles.image}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <TextComponent>asdsa</TextComponent>
        <ButtonComponent title="Get Started" />
      </View>
    </ImageBackground>
  );
};

export default OnboardingScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 0.064 * width,
    paddingTop: getStatusBarHeight() + 12,
    paddingBottom: 42,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
