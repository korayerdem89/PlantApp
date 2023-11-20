import { Text, Dimensions } from "react-native";
import React from "react";
import { colors } from "../constants/theme";
const { width, height } = Dimensions.get("window");
const diag = Math.sqrt(width * width + height * height);

const TextComponent = ({ size, textStyle, children, style }) => {
  let fontSize;
  let fontFamily;

  //responsive fontsize
  switch (size) {
    case "xxs":
      fontSize = diag * 0.011;
      break;
    case "xs":
      fontSize = diag * 0.015;
      break;
    case "s":
      fontSize = diag * 0.02;
      break;
    case "m":
      fontSize = diag * 0.023;
      break;
    case "ml":
      fontSize = diag * 0.027;
      break;
    case "l":
      fontSize = diag * 0.032;
      break;
    case "xl":
      fontSize = diag * 0.035;
      break;
    case "xxl":
      fontSize = diag * 0.04;
      break;
    default:
      fontSize = diag * 0.025;
      break;
  }

  switch (textStyle) {
    case "light":
      fontFamily = "Rubik-Light";
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
      fontFamily = "Rubik-Regular";
      break;
  }

  return (
    <Text
      style={[
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          color: colors.textColor,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default TextComponent;
