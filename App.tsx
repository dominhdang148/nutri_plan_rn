import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import SplashNavigation from "./app/navigations/SplashNavigation";
import { MainColors } from "./app/utils/Colors";

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

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator color={MainColors[25]} size={60} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <SplashNavigation />

      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: MainColors[100],
  },
});
