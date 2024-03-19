import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slice/UserSlice";
import api from "../api/api";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "../redux/slice/authApiSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const shape = z.object({
  login: z.string().min(1),
  password: z
    .string()
    .min(12, "En az 12 karakter ola biler")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{12,}$/,
      "Bir boyuk, bir kicik herf, bir reqem ve simvol olmalidir"
    ),
});

export default function LoginFormScreen() {
  const withScreen = Dimensions.get("window").width;
  const heightScreen = Dimensions.get("window").height;

  const nav = useNavigation();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const {
    handleSubmit,
    control,
    getValues,
    setError,
    formState: { errors },
  } = useForm({ resolver: zodResolver(shape) });

  const onSubmit = async (data) => {
    // api
    //   .post("user/login", data)
    //   .then((apiResult) => {
    //     console.log(apiResult);
    //     alert("Login olundu.");
    //     dispatch(setUser(apiResult.data.data));
    //     nav.navigate("Home");
    //   })
    //   .catch((err) => {
    //     if (err.message == "Request failed with status code 404") {
    //       setError("login", {
    //         type: "custom",
    //         message: "Istifadeci movcu deyil",
    //       });
    //     }
    //   });

    try {
      let response = await login(data).unwrap();
      alert("Login olundu.");
      dispatch(setUser(response.data));
      nav.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={{flex:1}}>
      <KeyboardAvoidingView style={{flex:1}}>
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
            <View style={styles.header}>
              <Text style={styles.title}>Login here</Text>
              <Text style={styles.head}>Welcome back you’ve been missed!</Text>
            </View>
            <View
              style={{
                height: 400,
                aspectRatio: 1,
                marginTop: -60,
                marginBottom: -40,
              }}
            >
              <LottieView
                source={require("../assets/lotties/login2.json")}
                style={{ flex: 1 }}
                loop
                autoPlay
              />
            </View>
            <View style={{ paddingHorizontal: 20, width: "100%" }}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    autoCorrect={false}
                    style={[styles.input, errors.login ? styles.error : {}]}
                    placeholder="Email"
                  />
                )}
                name="login"
              />
              {errors.login && (
                <Text style={styles.errMes}>{errors.login.message}</Text>
              )}
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    secureTextEntry
                    autoCorrect={false}
                    style={[
                      styles.input,
                      { marginTop: 20 },
                      errors.password ? styles.error : {},
                    ]}
                    placeholder="Password"
                  />
                )}
                name="password"
              />
              {errors.password && (
                <Text style={[styles.errMes]}>{errors.password.message}</Text>
              )}
              <TouchableOpacity>
                <Text style={styles.forget}>Forgot your password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                <Text style={styles.submit}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.register}>Create new account</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    paddingHorizontal: 50,
  },
  title: {
    fontWeight: "700",
    fontSize: 30,
    color: "#1F41BB",
    textAlign: "center",
  },
  head: {
    fontWeight: "600",
    fontSize: 17,
    color: "black",
    paddingHorizontal: 60,
    marginTop: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#F1F4FF",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F1F4FF",
  },
  forget: {
    textAlign: "right",
    marginTop: 20,
    color: "#1F41BB",
    fontSize: 14,
    fontWeight: "600",
  },
  submit: {
    backgroundColor: "#1F41BB",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    textAlign: "center",
    marginTop: 20,
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 30,
  },
  register: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  },
  error: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "#FFF0F3",
  },
  errMes: {
    fontSize: 11,
    color: "red",
  },
});
