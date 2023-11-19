import { StyleSheet, Text, SafeAreaView, Dimensions, View } from "react-native";
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";

const { width, height } = Dimensions.get("window");

const Profile = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, paddingTop: getStatusBarHeight() + 12 },
  container: {
    flex: 1,
    paddingHorizontal: width > 720 ? 24 : 20,
  },
});
