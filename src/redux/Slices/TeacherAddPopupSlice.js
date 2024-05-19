import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

const teacherAddSlice = createSlice({

    name:'teacherAdd',
    initialState,
    reducers:{

        teacherAddOpen:(state) => {

            state.value=true
        },

        teacherAddClose:(state) => {

            state.value=false
        }
    }


})

export const {teacherAddOpen , teacherAddClose} = teacherAddSlice.actions

export default teacherAddSlice.reducer