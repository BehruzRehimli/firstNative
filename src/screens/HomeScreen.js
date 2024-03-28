import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slice/UserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function HomeScreen() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const fetchUserData = async () => {
    try {
      const data = await AsyncStorage.getItem("user");

      if (data) {
        dispatch(setUser(JSON.parse(data)));
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };



  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      {user ? (
        <Text> {`Aktiv useerin username ===> ${user.username}`}</Text>
      ) : null}
      <Button
        title="Useri sil"
        onPress={() => dispatch(setUser(undefined))}
      ></Button>
      <Button
        title="Course sayfasi"
        onPress={() => router.push("course")}
      ></Button>
      <Button
        title="Form sayfasi"
        onPress={() => router.push("form")}
      ></Button>
      <TouchableOpacity
        onPress={() => router.push("login")}
        style={{
          backgroundColor: "green",
          padding: 10,
          margin: 10,
          borderRadius: 10,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "900" }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("board")}
        style={{
          backgroundColor: "green",
          padding: 10,
          margin: 10,
          borderRadius: 10,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "900" }}>Board</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("perm")}
        style={{
          backgroundColor: "green",
          padding: 10,
          margin: 10,
          borderRadius: 10,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "900" }}>Perms</Text>
      </TouchableOpacity>
      <View
        style={{
          height: 400,
          aspectRatio: 1,
          marginLeft: 5,
          // marginTop:-60,
          // marginBottom:-40
        }}
      >
        <LottieView
          source={require("../assets/lotties/home.json")}
          style={{ flex: 1 }}
          loop
          autoPlay
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
