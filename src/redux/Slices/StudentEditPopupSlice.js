import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

const studentEPUSlice = createSlice({

    name:'studentEPU',
    initialState,
    reducers:{

        studentEPUOpen:(state) => {

            state.value=true
        },

        studentEPUClose:(state) => {

            state.value=false
        }
    }


})

export const {studentEPUOpen , studentEPUClose} = studentEPUSlice.actions

export default studentEPUSlice.reducer