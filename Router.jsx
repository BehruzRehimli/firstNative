import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CoursesScreen from "./src/screens/CoursesScreen";
import FormScreen from "./src/screens/FormScreen";
import LoginScreen from "./src/screens/LoginScreen";
import LoginFormScreen from "./src/screens/LoginFormScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import PermScreen from "./src/screens/PermScreen";
import { StatusBar } from "expo-status-bar";

export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="FormScreen" component={FormScreen} />
        <Stack.Screen
          options={({ navigation }) => ({
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("FormScreen")}
                >
                  <View>
                    <Text>FormScreen</Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Courses"
          component={CoursesScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginForm"
          component={LoginFormScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Board"
          component={OnBoardingScreen}
        />
        <Stack.Screen
          name="Perm"
          component={PermScreen}
        />
      </Stack.Navigator>
      <StatusBar hidden={true}/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
