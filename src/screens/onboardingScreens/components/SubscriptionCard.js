import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import TextComponent from "../../../components/TextComponent";
import { colors } from "../../../constants/theme";
const { width, height } = Dimensions.get("window");

const SubscriptionCard = ({ type, children, onPress, subscriptionType }) => {
  /////active && inactive card colors
  const isActive = subscriptionType === type;
  const gradientColors = !isActive
    ? [
        "rgba(255,255,255,0.11)",
        "rgba(255,255,255,0.14)",
        "rgba(255,255,255,0.07)",
      ]
    : ["transparent", "rgba(40,175,110,0.15)", "rgba(40,175,110,0.7)"];
  const gradientLocations = isActive ? [0.3, 0.35, 0.85] : null;
  const cardBorderColor = isActive ? colors.primary : "rgba(255,255,255,0.3)";
  const radioButtonStyle = isActive
    ? styles.activeRadioButton
    : styles.radioButton;
  ////////////////////////
  return (
    <View style={{ top: 15 }}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          style={{ borderRadius: height > 720 ? 14 : 12, marginBottom: 16 }}
          colors={gradientColors}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          locations={gradientLocations}
        >
          <View
            style={[
              styles.subscriptionCard,
              {
                borderColor: cardBorderColor,
                borderWidth: isActive ? 1.5 : 0.5,
              },
            ]}
          >
            {isActive && (
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
            )}
            <View style={radioButtonStyle}>
              {isActive && <View style={styles.activeRadioDot} />}
            </View>
            <View style={styles.descriptionContainer}>{children}</View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default SubscriptionCard;

const styles = StyleSheet.create({
  subscriptionCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingVertical: 11,
    paddingHorizontal: width > 400 ? 16 : 13,
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
    backgroundColor: colors.primary,
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
