import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

const teacherEditSlice = createSlice({

    name:'teacherEdit',
    initialState,
    reducers:{

        teacherEditOpen:(state) => {

            state.value=true
        },

        teacherEditClose:(state) => {

            state.value=false
        }
    }


})

export const {teacherEditOpen , teacherEditClose} = teacherEditSlice.actions

export default teacherEditSlice.reducer