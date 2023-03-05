import { createSlice } from '@reduxjs/toolkit';
import { fetchAddContacts, fetchContacts, fetchDeleteContacts } from './api';

const staticName = 'contacts';

const contactsSlice = createSlice({
  name: staticName,
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAddContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchAddContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [fetchAddContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchDeleteContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchDeleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const idx = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(idx, 1);
    },
    [fetchDeleteContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
