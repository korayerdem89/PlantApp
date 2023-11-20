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
import FeaturesCard from "./FeaturesCard";
import SubscriptionCard from "./SubscriptionCard";
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
          {item.paywallSlide.map((slide) => (
            <FeaturesCard key={slide.id} slide={slide} />
          ))}
        </ScrollView>
        <View style={styles.subscriptionCardContainer}>
          <SubscriptionCard
            subscriptionType={subscriptionType}
            onPress={handleSelect.bind(this, "month")}
            type="month"
          >
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
              <TextComponent
                style={{ color: "rgba(255,255,255,0.7)" }}
                size="xs"
              >
                auto renewable
              </TextComponent>
            </TextComponent>
          </SubscriptionCard>
          <SubscriptionCard
            subscriptionType={subscriptionType}
            onPress={handleSelect.bind(this, "year")}
            type="year"
          >
            <TextComponent
              size="s"
              textStyle="medium"
              style={{ color: "#FFFFFF" }}
            >
              1 Year
            </TextComponent>
            <TextComponent size="xs" style={{ color: "rgba(255,255,255,0.7)" }}>
              First 3 days free, then $529,99/year
            </TextComponent>
          </SubscriptionCard>
        </View>
      </View>
    </View>
  );
};

export default PaywallComponent;

const styles = StyleSheet.create({
  paywallContainer: {
    bottom: height > 720 ? 155 : 150,
    height: height > 720 ? 390 : 330,
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
});
