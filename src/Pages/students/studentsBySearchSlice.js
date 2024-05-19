import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';

export const fetchStudentsBySearch = createAsyncThunk(
  'searchstudents',
  async (searchData, { rejectWithValue }) => {
    try {
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/students/search?_class=${searchData._class}`,
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

const studentsBySearchSlice = createSlice({
  name: 'searchstudents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentsBySearch.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchStudentsBySearch.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchStudentsBySearch.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default studentsBySearchSlice.reducer;
