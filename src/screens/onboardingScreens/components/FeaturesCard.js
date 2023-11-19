import { StyleSheet, View, Dimensions, Image } from "react-native";
import React from "react";
import TextComponent from "../../../components/TextComponent";
const { width, height } = Dimensions.get("window");

const FeaturesCard = ({ slide }) => {
  return (
    <View style={styles.container} key={slide.id}>
      <Image
        source={slide.icon}
        style={styles.paywallIcon}
        resizeMode="cover"
      />
      <TextComponent size="m" textStyle="medium" style={{ color: "white" }}>
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
};

export default FeaturesCard;

const styles = StyleSheet.create({
  container: {
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
});
