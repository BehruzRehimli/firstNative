import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect } from "react";
import api from "../api/api";
import { Controller, useForm } from "react-hook-form";
import {
  useCreatePermMutation,
  useDeletePermMutation,
  useGetPermsQuery,
} from "../redux/slice/permSlice";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"



export default function PermScreen() {
  const { handleSubmit, control } = useForm();

  const { data, isError, isLoading } = useGetPermsQuery();
  const [deletePerm,deleteDatas]=useDeletePermMutation();


  const onSubmit = (formData) => {
    console.log("submitData===>", formData);
  };

  const deleteHandler=async (id)=>{
    await deletePerm(id).unwrap();
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>PermScreen</Text>
      <Controller
        control={control}
        name="name"
        rules={{ required: true }}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => {
          return (
            <TextInput
              value={value}
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Name"
            />
          );
        }}
      />

      <Pressable onPress={() => handleSubmit(onSubmit)}>
        <Text>Submit</Text>
      </Pressable>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={{ justifyContent:"space-between", flexDirection:"row",padding:10}}>
              <Text style={{ color: "black" }}>
                {item.id}. {item.name}
              </Text>
              <Pressable onPress={()=>deleteHandler(item.id)}><Icon name="delete" size={20}/></Pressable>
            </View>
          );
        }}
        style={{ marginTop: 10 }}
        keyExtractor={(perm) => perm.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});
