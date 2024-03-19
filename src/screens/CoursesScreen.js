import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React from "react";

export default function CoursesScreen({ navigation }) {
  const data = [
    {
      name: "Js",
      id: 1,
    },
    {
      name: "React",
      id: 2,
    },
    {
      name: "css",
      id: 3,
    },
    {
      name: "html",
      id: 4,
    },
  ];

  return (
    <View
      style={{flex:1, alignItems: "center", marginTop: 30, justifyContent:"center" }}
    >
      <Text style={styles.header}>List budur</Text>
      <FlatList
        data={data}
        style={styles.flatlist}
        renderItem={({ item }) => (
          <Text onPress={() => navigation.navigate("Home")}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
      <TextInput autoCorrect={false} style={{backgroundColor:"grey",width:200}}/>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Home")} >
        <Text style={styles.btnText}>Geri</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "purple",
    padding:7,
    borderRadius:7,
    marginTop:30
  },
  btnText:{
    fontWeight:"700",
    color:"white"
  },
  flatlist:{
    flexGrow:0
  }
});
