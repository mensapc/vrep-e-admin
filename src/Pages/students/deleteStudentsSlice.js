import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';
import { toastifyFunc } from '../../lib/toastifyLoaders';

export const deleteStudentsAction = createAsyncThunk(
  'deletestudents',
  async (data, { rejectWithValue }) => {
    toastifyFunc('dismiss');
    try {
      toastifyFunc('pending', 'Deleting students...');
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/students/delete-many`,
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        data: { data },
      });
      toastifyFunc('fulfilled', response.data.message);
      return response.data;
    } catch (error) {
      toastifyFunc('rejected', customError(error).message);
      return rejectWithValue(customError(error));
    }
  }
);

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

const deleteStudentsSlice = createSlice({
  name: 'deletestudents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteStudentsAction.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(deleteStudentsAction.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(deleteStudentsAction.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default deleteStudentsSlice.reducer;
