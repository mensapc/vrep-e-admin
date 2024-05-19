import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customError } from '../../util/customError';
import AxiosInstance from '../../lib/axiosIntance';
import { toastifyFunc } from '../../lib/toastifyLoaders';
import { getUser } from '../../hooks/useStorage';

export const createTeacher = createAsyncThunk(
  'createteacher',
  async (data, { rejectWithValue }) => {
    toastifyFunc('dismiss');
    try {
      toastifyFunc('pending', 'Creating teacher...');
      const { token } = getUser();
      const response = await AxiosInstance({
        url: '/staff/register',
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        data: data,
      });
      toastifyFunc('fulfilled', 'Teacher created successfully');
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

const newTeacherSlice = createSlice({
  name: 'createteacher',
  initialState,
  reducers: { resetNewTeacher: () => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(createTeacher.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(createTeacher.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.user = action.payload;
      })
      .addCase(createTeacher.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { resetNewTeacher } = newTeacherSlice.actions;
export default newTeacherSlice.reducer;
