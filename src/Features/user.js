import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { name: "", age: '', email: "", work: '' };
export const userSlice = createSlice( {
    name: 'user',
    initialState: {
        value: initialStateValue,
        valueOne: initialStateValue,
        valueTwo: initialStateValue,
        valueThree: initialStateValue,
        valueFour: initialStateValue,
    },
    reducers: {
        login: ( state, action ) => {
            if ( action.payload.id === 1 ) {
                state.value = action.payload
            }
            if ( action.payload.id === 2 ) {
                state.valueOne = action.payload
            }
            if ( action.payload.id === 3 ) {
                state.valueTwo = action.payload
            }
            if ( action.payload.id === 4 ) {
                state.valueThree = action.payload
            }
            if ( action.payload.id === 5 ) {
                state.valueFour = action.payload
            }

        },

        logout: ( state ) => {
            state.value = initialStateValue;
            state.valueOne = initialStateValue;
            state.valueTwo = initialStateValue;
            state.valueThree = initialStateValue;
            state.valueFour = initialStateValue;
        },


    }
} )




export const { login, logout, profileDisplayerFunction } = userSlice.actions;


export default userSlice.reducer


// Here we are creating useSlice with the help of which we can initialize the state value and then and create reducers function which are used to manipulate the state values...!