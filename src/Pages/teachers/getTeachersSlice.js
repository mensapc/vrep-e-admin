import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';

export const fetchTeachers = createAsyncThunk(
  'getteachers',
  async (sortby, { rejectWithValue }) => {
    try {
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/staff/sort?sortby=${sortby}`,
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(customError(error));
    }
  }
);

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

const getTeachersSlice = createSlice({
  name: 'getteachers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default getTeachersSlice.reducer;

