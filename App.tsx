import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainColors from "./app/utils/colors/MainColors";
import { Raleway } from "./app/utils/constants/FontName";

const Tab = createBottomTabNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    // Raleway Font
    'raleway-regular': require("./assets/fonts/raleway/Raleway-Regular.ttf"),
    'raleway-medium': require("./assets/fonts/raleway/Raleway-Medium.ttf"),
    'raleway-semibold': require("./assets/fonts/raleway/Raleway-SemiBold.ttf"),
    'raleway-bold': require("./assets/fonts/raleway/Raleway-Bold.ttf"),
    // Poppins Font
    'poppins-regular': require("./assets/fonts/poppins/Poppins-Regular.ttf"),
    'poppins-medium': require("./assets/fonts/poppins/Poppins-Medium.ttf"),
    'poppins-semibold': require("./assets/fonts/poppins/Poppins-SemiBold.ttf"),
    'poppins-bold': require("./assets/fonts/poppins/Poppins-Bold.ttf"),
  });
  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <TabNavigation />
      </NavigationContainer> */}
      <Text style={{
        fontFamily: Raleway.regular
      }}>TestingFont</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainColors[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
