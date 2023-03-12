import { authLogin, authSignup } from './Api';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError(state, _) {
      state.error = '';
    },
    authLogout: () => initialState,
  },
  extraReducers: builder => {
    // login
    builder
      .addCase(authLogin.fulfilled, fulfilled)
      .addCase(authLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(authLogin.pending, (state, _) => {
        state.isLoading = true;
        state.error = '';
      });

    // register
    builder
      .addCase(authSignup.fulfilled, fulfilled)
      .addCase(authSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(authSignup.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      });
  },
});

const fulfilled = (state, action) => {
  state.error = '';
  state.isLoading = false;
  state.user = action.payload.user;
  state.token = action.payload.token;
};

export const authReducer = authSlice.reducer;
export const { resetError, authLogout } = authSlice.actions;
