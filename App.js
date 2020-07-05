import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import Home from "./screens/Home";
import Blog from "./screens/Blog";
import BlogDetails from "./screens/BlogDetails";
import store from "./redux/store";

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Provider store={store}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#621FF7",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={Home}
          options={{ title: "Inicio" }}
        />
        <Stack.Screen
          name="Evento"
          component={Blog}
          options={{ title: "Información Evento" }}
        />
        <Stack.Screen
          name="AddEvento"
          component={BlogDetails}
          options={{ title: "Agregar Evento" }}
        />
      </Stack.Navigator>
    </Provider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
