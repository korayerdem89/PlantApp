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
  const [subscriptionType, setSubscriptionType] = useState("year");
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

  const handleSelect = (value) => {
    setSubscriptionType(value);
    return null;
  };

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
                  <View style={styles.closeScreen}>
                    <TouchableOpacity>
                      <Image
                        source={require("../../../assets/closeIcon.png")}
                        style={{ width: 24, height: 24 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.paywallContainer}>
                    <TextComponent
                      size="l"
                      textStyle="light"
                      style={{ color: "white", lineHeight: 35 }}
                    >
                      <TextComponent textStyle="bold" size="l">
                        PlantApp{" "}
                      </TextComponent>
                      Premium
                    </TextComponent>
                    <TextComponent
                      style={{ color: "rgba(255,255,255,0.7)" }}
                      size="s"
                      textStyle="light"
                    >
                      Access All Features
                    </TextComponent>
                    <ScrollView
                      showsHorizontalScrollIndicator={false}
                      horizontal
                    >
                      {item.paywallSlide.map((slide) => {
                        return (
                          <View style={styles.featuresCard} key={slide.id}>
                            <Image
                              source={slide.icon}
                              style={styles.paywallIcon}
                              resizeMode="cover"
                            />
                            <TextComponent
                              size="m"
                              textStyle="medium"
                              style={{ color: "white" }}
                            >
                              {slide.title}
                            </TextComponent>
                            <TextComponent
                              size="xs"
                              textStyle="light"
                              style={{
                                color: "rgba(255,255,255,0.7)",
                                paddingTop: 2,
                              }}
                            >
                              {slide.subtitle}
                            </TextComponent>
                          </View>
                        );
                      })}
                    </ScrollView>
                    <View style={styles.subscriptionCardContainer}>
                      <TouchableOpacity
                        onPress={handleSelect.bind(this, "month")}
                      >
                        <LinearGradient
                          style={{
                            borderRadius: height > 720 ? 14 : 12,
                            marginBottom: 16,
                          }}
                          colors={
                            subscriptionType === "year"
                              ? [
                                  "rgba(255,255,255,0.11)",
                                  "rgba(255,255,255,0.14)",
                                  "rgba(255,255,255,0.07)",
                                ]
                              : [
                                  "transparent",
                                  "rgba(40,175,110,0.15)",
                                  "rgba(40,175,110,0.7)",
                                ]
                          }
                          start={
                            subscriptionType === "year"
                              ? { x: 0, y: 0 }
                              : { x: 0, y: 1 }
                          }
                          end={{ x: 1, y: 0 }}
                          locations={
                            subscriptionType === "year"
                              ? null
                              : [0.3, 0.35, 0.85]
                          }
                        >
                          <View
                            style={[
                              styles.subscriptionCard,
                              {
                                borderColor:
                                  subscriptionType === "month"
                                    ? "#28AF6E"
                                    : "rgba(255,255,255,0.3)",
                              },
                            ]}
                          >
                            <View
                              style={
                                subscriptionType === "month"
                                  ? styles.activeRadioButton
                                  : styles.radioButton
                              }
                            >
                              {subscriptionType === "month" && (
                                <View style={styles.activeRadioDot}></View>
                              )}
                            </View>
                            <View style={styles.descriptionContainer}>
                              <TextComponent
                                size="s"
                                textStyle="medium"
                                style={{ color: "#FFFFFF" }}
                              >
                                1 Month
                              </TextComponent>
                              <TextComponent
                                size="xs"
                                textStyle="light"
                                style={{ color: "rgba(255,255,255,0.7)" }}
                              >
                                $2.99/month,{" "}
                                <TextComponent size="xs">
                                  auto renewable
                                </TextComponent>
                              </TextComponent>
                            </View>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={handleSelect.bind(this, "year")}
                      >
                        <LinearGradient
                          style={{ borderRadius: height > 720 ? 14 : 12 }}
                          colors={
                            subscriptionType === "month"
                              ? [
                                  "rgba(255,255,255,0.11)",
                                  "rgba(255,255,255,0.14)",
                                  "rgba(255,255,255,0.07)",
                                ]
                              : [
                                  "transparent",
                                  "rgba(40,175,110,0.15)",
                                  "rgba(40,175,110,0.7)",
                                ]
                          }
                          start={
                            subscriptionType === "month"
                              ? { x: 0, y: 0 }
                              : { x: 0, y: 1 }
                          }
                          end={{ x: 1, y: 0 }}
                          locations={
                            subscriptionType === "month"
                              ? null
                              : [0.3, 0.35, 0.85]
                          }
                        >
                          <View
                            style={[
                              styles.subscriptionCard2,
                              {
                                borderColor:
                                  subscriptionType === "year"
                                    ? "#28AF6E"
                                    : "rgba(255,255,255,0.3)",
                              },
                            ]}
                          >
                            <View
                              style={
                                subscriptionType === "year"
                                  ? styles.activeRadioButton
                                  : styles.radioButton
                              }
                            >
                              {subscriptionType === "year" && (
                                <View style={styles.activeRadioDot}></View>
                              )}
                            </View>
                            <View style={styles.descriptionContainer}>
                              <TextComponent
                                size="s"
                                textStyle="medium"
                                style={{ color: "#FFFFFF" }}
                              >
                                1 Year
                              </TextComponent>
                              <TextComponent
                                size="xs"
                                textStyle="light"
                                style={{ color: "rgba(255,255,255,0.7)" }}
                              >
                                $2.99/month,{" "}
                                <TextComponent size="xs">
                                  auto renewable
                                </TextComponent>
                              </TextComponent>
                            </View>
                            <View
                              style={{
                                backgroundColor: "#28AF6E",
                                width: "26%",
                                position: "absolute",
                                right: 0,
                                top: 0,
                                borderBottomLeftRadius: height > 720 ? 20 : 18,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <TextComponent
                                textStyle="medium"
                                style={{ color: "#FFFFFF", padding: 4 }}
                                size="xs"
                              >
                                Save 50%
                              </TextComponent>
                            </View>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
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
  closeScreen: {
    position: "absolute",
    top: 30,
    right: 0,
    padding: 16,
    zIndex: 1,
  },
});
