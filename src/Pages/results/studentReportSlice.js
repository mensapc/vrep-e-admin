import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { getUser } from '../../hooks/useStorage';
import { customError } from '../../util/customError';

export const fetchStudentReport = createAsyncThunk(
  'studentreport',
  async (data, { rejectWithValue }) => {
    try {
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/api/v1/result/student-report`,
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

const studentReportSlice = createSlice({
  name: 'studentreport',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentReport.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchStudentReport.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchStudentReport.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default studentReportSlice.reducer;
