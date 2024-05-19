import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';

export const fetchExams = createAsyncThunk('getexams', async (sortby, { rejectWithValue }) => {
  try {
    const { token } = getUser();
    const response = await AxiosInstance({
      url: `/api/v1/exams`,
      method: 'GET',
      headers: { Authorization: `Bearer ${token}`, sortby: sortby },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(customError(error));
  }
});

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

const getExamsSlice = createSlice({
  name: 'getexams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExams.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchExams.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchExams.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default getExamsSlice.reducer;
