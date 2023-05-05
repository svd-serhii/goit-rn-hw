import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { Navigation } from "./screens/Navigation/Navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}
