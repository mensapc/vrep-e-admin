import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

const classesANCSlice = createSlice({

    name:'classesANC',
    initialState,
    reducers:{

        classesANCOpen:(state) => {

            state.value=true
        },

        classesANCClose:(state) => {

            state.value=false
        }
    }


})

export const {classesANCOpen , classesANCClose} = classesANCSlice.actions

export default classesANCSlice.reducer