import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';

export const updateTeacher = createAsyncThunk(
  'editTeacher',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/staff/${id}`,
        method: 'PUT',
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(customError(error));
    }
  }
);

const initialState = {
  status: 'idle',
  teacher: null,
  error: null,
};

const editTeacherSlice = createSlice({
  name: 'editTeacher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateTeacher.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTeacher.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.teacher = action.payload;
      })
      .addCase(updateTeacher.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});


export const { resetEditTeacher } = editTeacherSlice.actions;
export default editTeacherSlice.reducer;

