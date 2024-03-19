import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

initialState={user:null}

setStorage=async(data)=>{
    if (data) {
        await AsyncStorage.setItem("user",JSON.stringify(data))
    }
    else{
        await AsyncStorage.removeItem("user")
    }

}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state, action)=>{
            state.user=action.payload
            setStorage(action.payload)
        }
    }
})



export const {setUser}=userSlice.actions
export default userSlice