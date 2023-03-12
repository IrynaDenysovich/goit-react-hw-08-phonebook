import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const authSignup = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Login error');
    }
  }
);

export const contactsGet = createAsyncThunk(
  'contacts/get',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('/contacts', {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Login error');
    }
  }
);

export const contactsAdd = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', data.contact, {
        headers: {
          Authorization: data.token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const contactsDelete = createAsyncThunk(
  'contacts/delete',
  async (data, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${data.id}`, {
        headers: {
          Authorization: data.token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
