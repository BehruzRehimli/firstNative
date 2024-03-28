import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";


export default function FormScreen({ route }) {
  const [value, setValue] = useState();

  // useFocusEffect(() => {
  //   console.log("formPage===>");
  //   // return () => console.log("formPage destruct");
  // });

  return (
    <View>
      <Text>FormScreen15</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        autoComplete={"off"}
        value={value}
        onChangeText={(val) => {
          setValue(val);
        }}
      />
      <Button title="goster" onPress={() => router.push("")} />
    </View>
  );
}

const styles = StyleSheet.create({});
