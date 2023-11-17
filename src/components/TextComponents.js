import { Text, Dimensions } from "react-native";
import React from "react";
import colors from "../constants/Colors";

const { width, height } = Dimensions.get("window");
const diag = Math.sqrt(width * width + height * height);

const TextComponent = ({ size, style, children, style }) => {
  let fontSize;
  let fontFamily;

  switch (size) {
    case "xs":
      fontSize = diag * 0.015;
      break;
    case "s":
      fontSize = diag * 0.02;
      break;
    case "m":
      fontSize = diag * 0.025;
      break;
    case "ml":
      fontSize = diag * 0.03;
      break;
    case "l":
      fontSize = diag * 0.035;
      break;
    case "xl":
      fontSize = diag * 0.04;
      break;
    case "xxl":
      fontSize = diag * 0.045;
      break;
    case "3xl":
      fontSize = diag * 0.05;
      break;
    case "4xl":
      fontSize = diag * 0.055;
      break;
    case "5xl":
      fontSize = diag * 0.06;
      break;
    default:
      fontSize = diag * 0.025;
      break;
  }

  switch (style) {
    case "regular":
      fontFamily = "Rubik-Regular";
      break;
    case "medium":
      fontFamily = "Rubik-Medium";
      break;
    case "semibold":
      fontFamily = "Rubik-SemiBold";
      break;
    case "bold":
      fontFamily = "Rubik-Bold";
      break;
    case "extrabold":
      fontFamily = "Rubik-ExtraBold";
      break;

    default:
      break;
  }

  return (
    <Text
      style={[
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default TextComponent;
