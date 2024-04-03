import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Autho } from "./pages/Autho";
import { Home } from "./pages/home";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#C71585" },
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: " Georgia, serif", fontSize: 25 },
          headerTintColor: "white",
        }}
        initialRouteName="autho"
      >
        <Stack.Screen
          options={{
            title: "Welcome To User",
          }}
          name="autho"
          component={Autho}
        />
        <Stack.Screen
          options={{
            title: "User List",
          }}
          name="home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
