import { StyleSheet, Text } from "react-native";
import React from "react";
import OnboardingLayout from "../../layouts/onboarding/OnboardingLayout";
import TextComponent from "../../components/TextComponent";
const OnboardingScreens = () => {
  return (
    <OnboardingLayout>
      <TextComponent size="2xl">DENEME YAZISI</TextComponent>
    </OnboardingLayout>
  );
};

export default OnboardingScreens;

const styles = StyleSheet.create({});
