import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { getUser } from '../../hooks/useStorage';
import { customError } from '../../util/customError';

export const fetchStudentsResults = createAsyncThunk(
  'studentsresults',
  async (data, { rejectWithValue }) => {
    try {
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/api/v1/result/students-done-exams`,
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        data: data,
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

const studentsResultsSlice = createSlice({
  name: 'studentsresults',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentsResults.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchStudentsResults.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchStudentsResults.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default studentsResultsSlice.reducer;
