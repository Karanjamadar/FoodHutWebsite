import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiPublic } from '../config/api';



// thunk to do email login
export const login = createAsyncThunk(
  'auth/email',
  async (payload) => {
    let response = await apiPublic.post('/user/login', payload);
    console.log(response.data)
    return response.data;
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (payload) => {
    let response = await apiPublic.post('/user/register', payload);
    console.log(response.data)
    return response.data;
  }
);

// export const logout = createAsyncThunk(
//   'auth/logoutStatus',
//   async () => {
//     console.log('In logout');
//   },
// );

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // isLoggedIn: false,
    accessToken: '',
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setAuth: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.accessToken = action.payload.accessToken;
      state.user = action.payload?.data;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        // localStorage.setItem('loggedIn', state.isLoggedIn == true)
        state.accessToken = action.payload?.token;
        state.user = action.payload?.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.accessToken = '';
        state.user = {};
      })
  },
});

export const { setUser, setIsLoggedIn, setAuth } =
  authSlice.actions;

export default authSlice.reducer;
