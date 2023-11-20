import React, { useRef } from "react";
import { Animated, Image, TouchableWithoutFeedback, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Home from "../screens/tabScreens/home";
import Diagnose from "../screens/tabScreens/diagnose";
import Scan from "../screens/tabScreens/scan";
import MyGarden from "../screens/tabScreens/myGarden";
import Profile from "../screens/tabScreens/profile";
import HomeIcon from "../../assets/BottomTabIcons/HomeIcon";
import DiagnoseIcon from "../../assets/BottomTabIcons/DiagnoseIcon";
import MyGardenIcon from "../../assets/BottomTabIcons/MyGardenIcon";
import ProfileIcon from "../../assets/BottomTabIcons/ProfileIcon";
import { colors } from "../constants/theme";
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  //Scan Button için scale animasyonu
  const tabBarScale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(tabBarScale, {
      toValue: 0.9,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(tabBarScale, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  //////////////////////////////////////

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: { height: 60, paddingBottom: 10, position: "absolute" },
        tabBarLabelStyle: {
          fontFamily: "Rubik-Regular",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={25}
              height={25}
              color={focused ? colors.primary : "#BDBDBD"}
            />
          ),
          tabBarLabelStyle: { right: 1 },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <DiagnoseIcon color={focused ? colors.primary : "#BDBDBD"} />
          ),
        }}
        name="Diagnose"
        component={Diagnose}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: () => (
            <Animated.View style={{ transform: [{ scale: tabBarScale }] }}>
              <TouchableWithoutFeedback
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => navigation.navigate("Scan")}
              >
                <View>
                  <Image
                    source={require("../../assets/BottomTabIcons/ScanButton.png")}
                    style={{
                      width: 74,
                      height: 64,
                      bottom: 17,
                      zIndex: 2,
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </Animated.View>
          ),
          tabBarLabelStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <MyGardenIcon color={focused ? colors.primary : "#BDBDBD"} />
          ),
          tabBarLabel: "My Garden",
        }}
        name="MyGarden"
        component={MyGarden}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileIcon color={focused ? colors.primary : "#BDBDBD"} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
