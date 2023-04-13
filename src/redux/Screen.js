import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const Screen = createSlice({
  name: "screen",
  initialState: {
	name : 'first'
  },
  reducers: {
	setScreen :  (state, actions) => {
		state.name = actions.payload
	},
	
  },
});

export const {
	setScreen
} = Screen.actions;
export default Screen.reducer;