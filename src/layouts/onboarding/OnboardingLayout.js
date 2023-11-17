import {
  StyleSheet,
  ImageBackground,
  View,
  StatusBar,
  Platform,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import React from "react";
import ButtonComponent from "../../components/ButtonComponent";
const OnboardingLayout = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../../assets/OnboardingBackgrounds/getStarted_bg.png")}
      style={styles.image}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {children}
        <ButtonComponent title="Get Started" />
      </View>
    </ImageBackground>
  );
};

export default OnboardingLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: getStatusBarHeight() + 12,
    paddingBottom: 42,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
