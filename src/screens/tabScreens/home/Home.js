import { StyleSheet, Dimensions, View } from "react-native";
import React from "react";
import TopContainer from "./components/topContainer/TopContainer";
import BottomContainer from "./components/bottomContainer/BottomContainer";

const { height, width } = Dimensions.get("window");

const Home = () => {
  return (
    <View style={styles.container}>
      <TopContainer style={styles.topContainer} />
      <BottomContainer style={styles.bottomContainer} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: height > 720 ? 0.22 : 0.24,
  },
  bottomContainer: {
    flex: height > 720 ? 0.78 : 0.76,
  },
});
