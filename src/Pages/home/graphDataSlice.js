import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';

export const fetchGraphData = createAsyncThunk('graphdata', async (_, { rejectWithValue }) => {
  try {
    const { token } = getUser();
    const response = await AxiosInstance({
      url: '/api/v1/graphdata',
      headers: { Authorization: `Bearer ${token}` },
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

const graphDataSlice = createSlice({
  name: 'graphdata',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGraphData.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchGraphData.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchGraphData.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default graphDataSlice.reducer;
