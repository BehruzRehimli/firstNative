import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { Store } from "../src/redux/store";

export default function _layout() {
  return (
    <Provider store={Store}>
      <Stack>
        <Stack.Screen name="index" options={{headerTitle:"Home Page"}}/>
        <Stack.Screen name="perm" options={{headerTitle:"Permission"}}/>
        <Stack.Screen name="login" options={{headerShown:false}}/>
        <Stack.Screen name="loginform" options={{headerShown:false}}/>
        <Stack.Screen name="board" options={{headerShown:false}}/>
        <Stack.Screen name="course" options={{headerTitle:"Courses"}}/>

      </Stack>
    </Provider>
  );
}
