import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

const studentDPUSlice = createSlice({

    name:'studentDPU',
    initialState,
    reducers:{

        studentDPUOpen:(state) => {

            state.value=true
        },

        studentDPUClose:(state) => {

            state.value=false
        }
    }


})

export const {studentDPUOpen , studentDPUClose} = studentDPUSlice.actions

export default studentDPUSlice.reducer