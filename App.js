import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Router from "./Router";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={Store}>
      <Router/>
    </Provider>
  );
}


