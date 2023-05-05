import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../LoginScreen/LoginScreen";
import RegistrationScreen from "../RegistrationScreen/RegistrationScreen";
import Home from "../Home/Home";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

const MainStack = createStackNavigator();

export const Navigation = () => {
  return (
    <MainStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </MainStack.Navigator>
  );
};
