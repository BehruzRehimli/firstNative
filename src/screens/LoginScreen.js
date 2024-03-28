import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  const withScreen = Dimensions.get("window").width;
  const heightScreen = Dimensions.get("window").height;

  return (
    <ImageBackground
      source={require("../assets/images/back.png")}
      resizeMode="stretch"
      style={{
        width: withScreen,
        height: heightScreen,
        backgroundColor: "white",
      }}
    >
      <SafeAreaView style={{ alignItems: "center" }}>
        <View
          style={{
            height: 400,
            aspectRatio: 1,
          }}
        >
          <LottieView
            source={require("../assets/lotties/login.json")}
            style={{ flex: 1 }}
            loop
            autoPlay
          />
        </View>
        <View>
          <Text style={styles.title}>Discover Your Dream Job here</Text>
          <Text style={styles.desc}>
            Explore all the existing job roles based on your interest and study
            major
          </Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => router.push("loginform")}
              style={[styles.btn, styles.login]}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.register]}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 390,
    height: 390,
    marginTop: 30,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    textAlign: "center",
    color: "#1F41BB",
    paddingHorizontal: 50,
    marginTop: 30,
  },
  desc: {
    paddingHorizontal: 40,
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
  },
  btnContainer: {
    marginTop: 50,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  btn: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
  },
  login: {
    backgroundColor: "#1F41BB",
  },
  loginText: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 30,
    color: "white",
  },
  registerText: {
    fontWeight: "600",
    fontSize: 20,
  },
});
