import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

//Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// POST @ /users/singup
// body: {name, email, password}
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.post('/users/singup', credentials);
      //After successful register add the token to the HTTP header
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// POST @ /users/login
// body: {email, password}
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.post('/users/login', credentials);
      //After successful login add the token to the HTTP header
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

//POST @ /users/logout
//headers: Authorization: Bearer token
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    //After a successful logout remove the token fron the HTTP header
    clearAuthHeader();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

//GET @ /users/current
//headers: Authorization: Bearer token
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    //Readinf the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      //If there is no token exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      //If there is a token add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const resp = await axios.get('users/current');
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
