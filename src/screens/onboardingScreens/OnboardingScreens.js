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

const onboardingItems = [
  {
    id: 0,
    bg: require("../../../assets/OnboardingBackgrounds/getStarted_bg.png"),
    legal:
      "By tapping next, you are agreeing to PlantID Terms of Use & Privacy Policy.",
  },
  {
    id: 1,
    bg: require("../../../assets/OnboardingBackgrounds/onboard1_bg.png"),
    indicator: "indicator",
  },
  {
    id: 2,
    bg: require("../../../assets/OnboardingBackgrounds/onboard2_bg.png"),
    indicator: "indicator",
  },
];

const OnboardingScreens = () => {
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < onboardingItems.length) {
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
        data={onboardingItems}
        horizontal
        keyExtractor={(item) => item.id.toString()}
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
          {onboardingItems[currentIndex].legal && (
            <TextComponent size="xs" textStyle="light" style={styles.legalText}>
              {onboardingItems[currentIndex].legal}
            </TextComponent>
          )}
          {onboardingItems[currentIndex].indicator && (
            <View style={styles.indicatorContainer}>
              {onboardingItems.map((_, i) => {
                return (
                  <View
                    key={i}
                    style={[
                      styles.dot,
                      i + 1 === currentIndex && styles.dotActive,
                    ]}
                  />
                );
              })}
            </View>
          )}
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
    bottom: 8,
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
    marginTop: 15,
    height: 35,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  dot: {
    marginHorizontal: 4,
    height: 6,
    width: 6,
    borderRadius: 5,
    backgroundColor: "rgba(19,35,27,0.25)",
  },
  dotActive: {
    backgroundColor: "rgba(19,35,27,1)",
    height: 10,
    width: 10,
  },
});
