import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/tabScreens/home";
import Diagnose from "../screens/tabScreens/diagnose";
import Scan from "../screens/tabScreens/scan";
import MyGarden from "../screens/tabScreens/myGarden";
import Profile from "../screens/tabScreens/profile";
import HomeIcon from "../../assets/BottomTabIcons/HomeIcon";
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={"red"} />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Diagnose" component={Diagnose} />
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="MyGarden" component={MyGarden} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
