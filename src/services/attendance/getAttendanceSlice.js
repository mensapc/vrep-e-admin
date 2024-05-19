import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';

export const fetchAttendance = createAsyncThunk(
  'getattendance',
  async (searchData, { rejectWithValue }) => {
    const { student, _class, academic_year } = searchData;
    try {
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/api/v1/attendance/search?student=${student}&_class=${_class}&academic_year=${academic_year}`,
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, data: searchData },
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

const getAttendanceSlice = createSlice({
  name: 'getattendance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttendance.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchAttendance.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchAttendance.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default getAttendanceSlice.reducer;
