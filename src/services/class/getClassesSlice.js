import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';

export const fetchClasses = createAsyncThunk('getclasses', async (sortby, { rejectWithValue }) => {
  try {
    const { token } = getUser();
    const response = await AxiosInstance({
      url: `/api/v1/classes`,
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

const getClassesSlice = createSlice({
  name: 'getclasses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default getClassesSlice.reducer;
