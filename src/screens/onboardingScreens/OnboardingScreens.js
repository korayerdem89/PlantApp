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
import PaywallComponent from "./components/PaywallComponent";
const { width, height } = Dimensions.get("window");

const onboardingItems = [
  {
    id: 0,
    bg: require("../../../assets/OnboardingBackgrounds/getStarted_bg.png"),
    legal:
      "By tapping next, you are agreeing to PlantID Terms of Use & Privacy Policy.",
    buttonTitle: "Get Started",
  },
  {
    id: 1,
    bg: require("../../../assets/OnboardingBackgrounds/onboard1_bg.png"),
    indicator: "indicator",
    buttonTitle: "Continue",
  },
  {
    id: 2,
    bg: require("../../../assets/OnboardingBackgrounds/onboard2_bg.png"),
    indicator: "indicator",
    buttonTitle: "Continue",
  },
  {
    id: 3,
    bg: require("../../../assets/OnboardingBackgrounds/paywall_bg.png"),
    legal:
      "After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable",
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
    buttonTitle: "Try free for 3 days",
  },
];

const OnboardingScreens = ({ navigation }) => {
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
                    <TouchableOpacity
                      onPress={() => navigation.replace("BottomTabNavigator")}
                    >
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
          title={onboardingItems[currentIndex].buttonTitle}
          onPress={handlePress}
        />
        <View
          style={[
            styles.bottomTextOrIndicator,
            { width: onboardingItems[currentIndex].paywall ? "100%" : "80%" },
          ]}
        >
          {onboardingItems[currentIndex].legal && (
            <TextComponent
              size={onboardingItems[currentIndex].paywall ? "xxs" : "xs"}
              textStyle="light"
              style={styles.legalText}
            >
              {onboardingItems[currentIndex].legal}
            </TextComponent>
          )}
          {onboardingItems[currentIndex].paywall && (
            <View style={styles.legalLinks}>
              <TextComponent size="xs" style={{ color: colors.legalTextColor }}>
                Terms
              </TextComponent>
              <View
                style={{
                  backgroundColor: colors.legalTextColor,
                  width: 5,
                  height: 5,
                  borderRadius: 5,
                  marginHorizontal: 10,
                }}
              ></View>
              <TextComponent size="xs" style={{ color: colors.legalTextColor }}>
                Privacy
              </TextComponent>
              <View
                style={{
                  backgroundColor: colors.legalTextColor,
                  width: 5,
                  height: 5,
                  borderRadius: 5,
                  marginHorizontal: 10,
                }}
              ></View>
              <TextComponent size="xs" style={{ color: colors.legalTextColor }}>
                Restore
              </TextComponent>
            </View>
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
  legalLinks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
  },
  bottomTextOrIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
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
  closeButton: {
    position: "absolute",
    top: 30,
    right: 0,
    padding: 16,
    zIndex: 1,
  },
});
