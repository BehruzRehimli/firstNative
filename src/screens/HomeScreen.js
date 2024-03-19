import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slice/UserSlice";
import { API_BASE } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ route, navigation }) {
  const user = useSelector((state) => state.user.user);
  const focus = useIsFocused();
  const dispatch = useDispatch();
  const [memory,setMemory]=useState()

  const fetchUserData = async () => {
    try {
      const data = await AsyncStorage.getItem("user");

      if (data) {
         setMemory(JSON.parse(data));
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };


  useEffect(() => {
    if (focus) {
      console.log("Home focus oldu");
    }
    // fetchUserData()
    if (memory) {
      dispatch(setUser(memory))
    }
  }, [focus,memory]);

  useEffect(()=>{
    fetchUserData()
  },[])

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
        onPress={() => navigation.navigate("Courses")}
      ></Button>
      <Button
        title="Form sayfasi"
        onPress={() => navigation.navigate("FormScreen")}
      ></Button>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
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
        onPress={() => navigation.navigate("Board")}
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
        onPress={() => navigation.navigate("Perm")}
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
