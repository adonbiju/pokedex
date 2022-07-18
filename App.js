import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Home from './Screens/Home';
import Details from './Screens/Details';
import Bookmarks from "./Screens/Bookmarks";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

 const App= ()=> {
  return (
    <NavigationContainer theme={theme}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Bookmarks" component={Bookmarks} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App