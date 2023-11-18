import React, { useRef, useState, useCallback } from "react";
import {
  ImageBackground,
  View,
  Dimensions,
  FlatList,
  StyleSheet,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../components/ButtonComponent";
import TextComponent from "../../components/TextComponent";
import { colors } from "../../constants/theme";

const { width } = Dimensions.get("window");

const backgroundImageData = [
  { bg: require("../../../assets/OnboardingBackgrounds/getStarted_bg.png") },
  { bg: require("../../../assets/OnboardingBackgrounds/onboard1_bg.png") },
  { bg: require("../../../assets/OnboardingBackgrounds/onboard2_bg.png") },
];

const OnboardingScreens = () => {
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < backgroundImageData.length) {
        flatListRef.current.scrollToOffset({
          animated: true,
          offset: nextIndex * width,
        });
        return nextIndex;
      }
      return prevIndex;
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={backgroundImageData}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.bg}
            style={styles.image}
            resizeMode={"stretch"}
          >
            <View style={styles.renderContainer}>
              <TextComponent>{item.title}</TextComponent>
            </View>
          </ImageBackground>
        )}
        keyExtractor={(_, index) => index.toString()}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
      <View style={styles.bottomContainer}>
        <ButtonComponent
          style={styles.button}
          title="Get Started"
          onPress={handlePress}
        />
        <View style={styles.bottomTextOrIndicator}>
          <TextComponent size="xs" textStyle="light" style={styles.legalText}>
            By tapping next, you are agreeing to PlantID Terms of Use & Privacy
            Policy.
          </TextComponent>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreens;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  renderContainer: {
    paddingHorizontal: 24,
    paddingTop: getStatusBarHeight() + 12,
    paddingBottom: 42,
  },
  image: {
    width,
  },
  bottomContainer: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: 24,
    bottom: 20,
    alignItems: "center",
  },
  button: {
    width: "100%",
  },
  legalText: {
    color: colors.legalTextColor,
    textAlign: "center",
  },
  bottomTextOrIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginTop: 20,
  },
});
