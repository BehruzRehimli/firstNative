import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

export default function OnBoardingScreen() {
  const nav = useNavigation();
  return (
    <Onboarding
      onDone={() => nav.navigate("Home")}
      pages={[
        {
          backgroundColor: "#D7F9F1",
          title: "Restoran 1",
          subtitle: "Restoran baresinde qisa melumat",
          image: (
            <Image
              style={{
                borderRadius: 20,
                borderColor: "#5DDFC1",
                borderWidth: 3,
              }}
              source={require("../assets/images/res1.jpg")}
            />
          ),
        },
        {
          backgroundColor: "#7AA095",
          title: "Restoran 2",
          subtitle: "Restoran baresinde qisa melumat",
          image: (
            <Image
              style={{
                borderRadius: 20,
                borderColor: "#46917C",
                borderWidth: 3,
    
              }}
              source={require("../assets/images/res2.jpg")}
            />
          ),
        },
        {
          backgroundColor: "#AFBC88",
          title: "Restoran 3",
          subtitle: "Restoran baresinde qisa melumat",
          image: (
            <Image
              style={{
                borderRadius: 20,
                borderColor: "#AAC45E",
                borderWidth: 3,

              }}
              source={require("../assets/images/res3.jpg")}
            />
          ),
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({});
