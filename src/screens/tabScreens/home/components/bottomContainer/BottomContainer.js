import { StyleSheet, FlatList, View, Dimensions, Image } from "react-native";
import React from "react";
import QuestionCard from "../QuestionCard";
import TextComponent from "../../../../../components/TextComponent";
import { useSelector } from "react-redux";
import CategoriesCard from "../CategoriesCard";
const { width, height } = Dimensions.get("window");

const BottomContainer = ({ style }) => {
  /// API isteği sonrası kategorileri ve soruları redux store'dan çekiyoruz.
  const {
    categories,
    status: categoriesStatus,
    error: categoriesError,
  } = useSelector((state) => state.categories);
  const {
    questions,
    status: questionsStatus,
    error: questionsError,
  } = useSelector((state) => state.questions);
  ///////////////////////////////////////////////////////////////////////////

  return (
    <View style={[styles.container, style]}>
      <View style={styles.premiumBoxContainer}>
        <Image
          style={styles.premiumBoxImage}
          source={require("../../../../../../assets/PremiumBox.png")}
        />
      </View>

      <TextComponent
        style={{
          marginBottom: height > 720 ? 10 : 8,
        }}
        textStyle="medium"
        size="s"
      >
        Get Started
      </TextComponent>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => <QuestionCard question={item} />}
          data={questions}
        />
      </View>
      <View style={{ marginTop: height > 720 ? 24 : 18 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <CategoriesCard category={item} index={index} />
          )}
          data={categories.data}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      </View>
    </View>
  );
};

export default BottomContainer;

const styles = StyleSheet.create({
  container: {
    padding: width > 380 ? 24 : 18,
  },
  premiumBoxContainer: {
    width: height > 720 ? 327 : 260,
    height: height > 720 ? 64 : 50,
    alignSelf: "center",
    marginBottom: height > 720 ? 20 : 16,
  },
  premiumBoxImage: {
    height: "100%",
    width: "100%",
  },
});
