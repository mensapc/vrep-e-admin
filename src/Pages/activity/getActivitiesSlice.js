import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';

export const fetchActivities = createAsyncThunk(
  'getactivities',
  async (sortby, { rejectWithValue }) => {
    try {
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/api/v1/activities`,
        method: 'GET',
        headers: { Authorization: `Bearer ${token}`, sortby: sortby },
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

const getActivitiesSlice = createSlice({
  name: 'getactivities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivities.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default getActivitiesSlice.reducer;
