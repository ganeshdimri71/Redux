import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialStateValue = "";
export const themeSlice = createSlice( {

	name: "theme",
	initialState: {
		value: initialStateValue,
		valueOne: initialStateValue,
		valueTwo: initialStateValue,
		valueThree: initialStateValue,
		valueFour: initialStateValue,
		valueFive: initialStateValue,
		valueSix: initialStateValue,
		valueSeven: initialStateValue,
		valueEight: initialStateValue,
		valueNine: initialStateValue,
	},
	reducers: {
		changeColor: ( state, action ) => {
			console.log( action )
			if ( action.payload.value == 1 ) state.value = action.payload.color;
			if ( action.payload.value == 2 ) state.valueOne = action.payload.color;
			if ( action.payload.value == 3 ) state.valueTwo = action.payload.color;
			if ( action.payload.value == 4 ) state.valueThree = action.payload.color;
			if ( action.payload.value == 5 ) state.valueFour = action.payload.color;
		},
		changeBackgroundColor: ( state, action ) => {
			console.log( action )
			if ( action.payload.value == 1 ) state.valueFive = action.payload.bgcolor;
			if ( action.payload.value == 2 ) state.valueSix = action.payload.bgcolor;
			if ( action.payload.value == 3 ) state.valueSeven = action.payload.bgcolor;
			if ( action.payload.value == 4 ) state.valueEight = action.payload.bgcolor;
			if ( action.payload.value == 5 ) state.valueNine = action.payload.bgcolor;
		},

	},
} );


export const { changeColor, changeBackgroundColor } = themeSlice.actions;

export default themeSlice.reducer;


// This is the theme slice we have created the themeSlice and the initial value is kept null and then we have use the reducers function with the help of which we can change the state...!
