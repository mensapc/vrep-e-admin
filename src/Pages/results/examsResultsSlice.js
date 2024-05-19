import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { getUser } from '../../hooks/useStorage';
import { customError } from '../../util/customError';

export const fetchExamsResults = createAsyncThunk(
  'examsresults',
  async (student_id, { rejectWithValue }) => {
    try {
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/api/v1/result/student-exam-results/${student_id}`,
        method: 'GET',
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

const examsResultsSlice = createSlice({
  name: 'examsresults',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExamsResults.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchExamsResults.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchExamsResults.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default examsResultsSlice.reducer;
