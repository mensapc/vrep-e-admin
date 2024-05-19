// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { saveUser } from '../../../hooks/useStorage';


// export const registerUser = createAsyncThunk('register', async (data, { rejectWithValue }) => {
//     toastifyFunc('dismiss');
//     try {
//       toastifyFunc('pending', 'Logging in...');
//       const response = await AxiosInstance({
//         url: '/api/v1/admin/login',
//         method: 'POST',
//         data,
//       });
//       saveUser(response.data);
//       toastifyFunc('dismiss');
//       return response.data;
//     } catch (error) {
//       console.error('Error during login:', error);
//       toastifyFunc('rejected', customError(error).message);
//       return rejectWithValue(customError(error));
//     }
//   });
  
//   const initialState = {
//     status: 'idle',
//     user: null,
//     error: null,
//   };
  
//   const registerSlice = createSlice({
//     name: 'register',
//     initialState,
//     reducers: {
//       resetRegister: () => initialState,
//     },
//     extraReducers: (builder) => {
//       builder
//         .addCase(registerUser.pending, (state) => {
//           state.status = 'pending';
//         })
//         .addCase(registerUser.fulfilled, (state, action) => {
//           state.status = 'fulfilled';
//           state.user = action.payload;
//         })
//         .addCase(registerUser.rejected, (state, action) => {
//           state.status = 'rejected';
//           state.error = action.payload;
//         });
//     },
//   });
  
//   export const { resetRegister } = registerSlice.actions;
//   export default registerSlice.reducer;
  