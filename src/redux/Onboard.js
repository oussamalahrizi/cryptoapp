import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const setOnboard = async ()=> {
	await AsyncStorage.setItem('onboard', 'false');
}

const getOnboard = async ()=> {
	const value = await AsyncStorage.getItem('onboard');
	return value
}

const Onboard = createSlice({
  name: "onboard",
  initialState: {
	isTrue : true
  },
  reducers: {
	finishOnboard :  (state) => {
		setOnboard()
		state.isTrue = false;
	},
	readOnboard :  (state) => {
		const value =  getOnboard()
		if (value !==  null)
			state.isTrue = true
	}
  },
});

export const {
 finishOnboard, readOnboard
} = Onboard.actions;
export default Onboard.reducer;