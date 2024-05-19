import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

const classesEECSlice = createSlice({

    name:'classesEEC',
    initialState,
    reducers:{

        classesEECOpen:(state) => {

            state.value=true
        },

        classesEECClose:(state) => {

            state.value=false
        }
    }


})

export const {classesEECOpen , classesEECClose} = classesEECSlice.actions

export default classesEECSlice.reducer