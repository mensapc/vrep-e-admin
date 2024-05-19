import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

const teacherDeleteSlice = createSlice({

    name:'teacherDelete',
    initialState,
    reducers:{

        teacherDeleteOpen:(state) => {

            state.value=true
        },

        teacherDeleteClose:(state) => {

            state.value=false
        }
    }


})

export const {teacherDeleteOpen , teacherDeleteClose} = teacherDeleteSlice.actions

export default teacherDeleteSlice.reducer