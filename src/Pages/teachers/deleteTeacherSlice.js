import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';
import { toastifyFunc } from '../../lib/toastifyLoaders';

export const deleteTeacherAction = createAsyncThunk(
  'deleteteacher',
  async (id, { rejectWithValue }) => {
    toastifyFunc('dismiss');
    try {
      toastifyFunc('pending', 'Deleting teacher...');
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/staff/${id}`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      toastifyFunc('fulfilled', response.data.message);
      return { message: response.data.message, id: id };
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

const deleteTeacherSlice = createSlice({
  name: 'deleteteacher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteTeacherAction.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(deleteTeacherAction.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(deleteTeacherAction.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});
export const { resetDeleteTeacher } = deleteTeacherSlice.actions;
export default deleteTeacherSlice.reducer;

