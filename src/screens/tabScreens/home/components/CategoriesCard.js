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

const CategoriesCard = ({ category, index }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: category.image.url }}
        style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
      >
        <View style={styles.innerContainer}>
          <TextComponent size="xs" style={styles.title}>
            {category.title}
          </TextComponent>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: height > 720 ? 160 : 140,
    marginVertical: 5,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "rgba(41,187,137,0.18)",
    borderRadius: 12,
  },
  innerContainer: {
    height: 56,
    paddingHorizontal: 12,
    justifyContent: "flex-start",
  },
  title: {},
});
