import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={18} color="#ABABAB" />
      <TextInput
        style={styles.input}
        placeholder="Search for plants"
        placeholderTextColor="#AFAFAF"
      />
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingLeft: 16,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    height: 40,
    fontFamily: "Rubik-Regular",
  },
});
