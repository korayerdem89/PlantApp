import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import TextComponent from "../../../../components/TextComponent";
import React from "react";
const { width, height } = Dimensions.get("window");

const QuestionCard = ({ question }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: question.image_uri }}
        style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
      >
        <View style={styles.innerContainer}>
          <TextComponent size="xs" style={styles.title}>
            {question.title}
          </TextComponent>
        </View>
      </ImageBackground>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  container: {
    width: 0.64 * width,
    height: 0.2 * height,
    marginRight: 10,
    overflow: "hidden",
    borderRadius: 12,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    paddingHorizontal: 12,
  },
  title: {
    color: "#fff",
  },
});
