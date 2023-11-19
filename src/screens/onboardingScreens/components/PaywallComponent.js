import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TextComponent from "../../../components/TextComponent";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");
const PaywallComponent = ({ item }) => {
  const [subscriptionType, setSubscriptionType] = useState("year");
  const handleSelect = (value) => {
    setSubscriptionType(value);
    return null;
  };

  return (
    <View>
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
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
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
          <TouchableOpacity onPress={handleSelect.bind(this, "month")}>
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
                subscriptionType === "year" ? { x: 0, y: 0 } : { x: 0, y: 1 }
              }
              end={{ x: 1, y: 0 }}
              locations={subscriptionType === "year" ? null : [0.3, 0.35, 0.85]}
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
                    <TextComponent size="xs">auto renewable</TextComponent>
                  </TextComponent>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSelect.bind(this, "year")}>
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
                subscriptionType === "month" ? { x: 0, y: 0 } : { x: 0, y: 1 }
              }
              end={{ x: 1, y: 0 }}
              locations={
                subscriptionType === "month" ? null : [0.3, 0.35, 0.85]
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
                    <TextComponent size="xs">auto renewable</TextComponent>
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
    </View>
  );
};

export default PaywallComponent;

const styles = StyleSheet.create({
  paywallContainer: {
    bottom: height > 720 ? 155 : 150,
    height: height > 720 ? 380 : 320,
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
});
