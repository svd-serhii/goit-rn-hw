import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../LoginScreen/LoginScreen";
import { RegistrationScreen } from "../RegistrationScreen/RegistrationScreen";
import { Home } from "../Home/Home";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";
import { PostsNav } from "./PostsNav";

const MainStack = createStackNavigator();

export const Navigation = () => {
  return (
    <MainStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="PostsNav" component={PostsNav} />
      <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </MainStack.Navigator>
  );
};
