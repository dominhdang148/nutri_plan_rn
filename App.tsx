import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./app/screens/home/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/navigations/TabNavigation";
import RootNavigation from "./app/navigations/RootNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./app/screens/profile/ProfileScreen";

const Tab = createBottomTabNavigator();
export default function App() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="home"
          screenOptions={
            {
              tabBarActiveTintColor: "red"
            }
          }
        >
          <Tab.Screen name='home' component={HomeScreen} />
          <Tab.Screen name='profile' component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
