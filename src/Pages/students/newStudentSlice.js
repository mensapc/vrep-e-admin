import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customError } from '../../util/customError';
import AxiosInstance from '../../lib/axiosIntance';
import { toastifyFunc } from '../../lib/toastifyLoaders';
import { getUser } from '../../hooks/useStorage';

export const createStudent = createAsyncThunk(
  'createstudent',
  async (data, { rejectWithValue }) => {
    toastifyFunc('dismiss');
    try {
      toastifyFunc('pending', 'Creating student...');
      const { token } = getUser();
      const response = await AxiosInstance({
        url: '/student/register',
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        data: data,
      });
      toastifyFunc('fulfilled', 'Student created successfully');
      return response.data;
    } catch (error) {
      toastifyFunc('rejected', customError(error).message);
      return rejectWithValue(customError(error));
    }
  }
);

const initialState = {
  status: 'idle',
  user: null,
  error: null,
};

const newStudentSlice = createSlice({
  name: 'createstudent',
  initialState,
  reducers: { resetNewStudent: () => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(createStudent.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.user = action.payload;
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { resetNewStudent } = newStudentSlice.actions;
export default newStudentSlice.reducer;
