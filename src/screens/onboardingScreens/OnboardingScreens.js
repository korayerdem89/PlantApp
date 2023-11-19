import React, { useRef, useState, useCallback } from "react";
import {
  ImageBackground,
  View,
  Dimensions,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../components/ButtonComponent";
import TextComponent from "../../components/TextComponent";
import { colors } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import PaywallComponent from "./components/PaywallComponent";
const { width, height } = Dimensions.get("window");

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
  {
    id: 3,
    bg: require("../../../assets/OnboardingBackgrounds/paywall_bg.png"),
    paywall: true,
    paywallSlide: [
      {
        id: 0,
        title: "Unlimited",
        subtitle: "Plant Identify",
        icon: require("../../../assets/paywall/slideIcon1.png"),
      },
      {
        id: 1,
        title: "Faster",
        subtitle: "Process",
        icon: require("../../../assets/paywall/slideIcon2.png"),
      },
      {
        id: 2,
        title: "Detailed",
        subtitle: "Plant Care",
        icon: require("../../../assets/paywall/slideIcon3.png"),
      },
    ],
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
              {item.paywall && (
                <>
                  <View style={styles.closeButton}>
                    <TouchableOpacity>
                      <Image
                        source={require("../../../assets/closeIcon.png")}
                        style={{ width: 24, height: 24 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <PaywallComponent item={item} />
                </>
              )}
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
              {onboardingItems
                .filter((item) => !item.paywall)
                .map((_, i) => {
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
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: getStatusBarHeight() + 12,
    justifyContent: "space-between",
  },
  image: {
    width,
  },
  paywallContainer: {
    bottom: height > 720 ? 155 : 150,
    height: height > 720 ? 380 : 320,
  },
  bottomContainer: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: 24,
    bottom: 8,
    alignItems: "center",
    height: 120,
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
  featuresCard: {
    marginTop: 20,
    padding: 16,
    marginRight: 8,
    backgroundColor: "rgba(255,255,255,0.08)",
    width: 0.39 * width,
    height: 0.16 * height,
    borderRadius: 14,
    justifyContent: "space-around",
  },
  paywallIcon: {
    width: 0.08 * width,
    height: 0.08 * width,
    marginBottom: 16,
  },
  subscriptionCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: height > 720 ? 14 : 12,
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingVertical: height > 720 ? 11 : 10,
    paddingHorizontal: height > 720 ? 16 : 13,
  },
  subscriptionCard2: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: height > 720 ? 14 : 12,
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingVertical: height > 720 ? 11 : 10,
    paddingLeft: height > 720 ? 16 : 13,
    overflow: "hidden",
  },
  subscriptionCardContainer: {
    top: 5,
  },
  radioButton: {
    backgroundColor: "rgba(255,255,255,0.15)",
    width: width > 750 ? 24 : width > 730 ? 22 : 20,
    height: width > 750 ? 24 : width > 730 ? 22 : 20,
    borderRadius: 20,
    marginRight: width > 750 ? 12 : 10,
  },
  activeRadioButton: {
    backgroundColor: "#28AF6E",
    width: width > 750 ? 24 : width > 730 ? 22 : 20,
    height: width > 750 ? 24 : width > 730 ? 22 : 20,
    borderRadius: 20,
    marginRight: width > 750 ? 12 : 10,
    justifyContent: "center",
    alignItems: "center",
  },
  activeRadioDot: {
    backgroundColor: "#FFFFFF",
    padding: 3.5,
    borderRadius: 20,
  },
  closeButton: {
    position: "absolute",
    top: 30,
    right: 0,
    padding: 16,
    zIndex: 1,
  },
});
