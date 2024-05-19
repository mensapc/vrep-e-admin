import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

const classesDECSlice = createSlice({

    name:'classesDEC',
    initialState,
    reducers:{

        classesDECOpen:(state) => {

            state.value=true
        },

        classesDECClose:(state) => {

            state.value=false
        }
    }


})

export const {classesDECOpen , classesDECClose} = classesDECSlice.actions

export default classesDECSlice.reducer