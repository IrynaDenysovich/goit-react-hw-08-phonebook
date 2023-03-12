import { createSlice } from '@reduxjs/toolkit';
import { contactsAdd, contactsDelete, contactsGet } from './Api';

const initialState = {
  items: null,
  getLoading: false,
  addLoading: false,
  removeIndex: '',
  error: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    predictRemove(state, action) {
      state.removeIndex = action.payload;
    },
    contactsReset: () => initialState,
    contactsError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    // fetchall
    builder
      .addCase(contactsGet.fulfilled, (state, action) => {
        state.items = action.payload;
        state.getLoading = false;
        state.error = '';
      })
      .addCase(contactsGet.rejected, (state, action) => {
        state.getLoading = false;
        state.error = action.payload;
      })
      .addCase(contactsGet.pending, (state, _) => {
        state.getLoading = true;
        state.error = '';
      });

    // add contact
    builder
      .addCase(contactsAdd.fulfilled, (state, action) => {
        state.addLoading = false;
        state.items.push(action.payload);
      })
      .addCase(contactsAdd.rejected, (state, action) => {
        state.addLoading = false;
        state.error = action.payload;
      })
      .addCase(contactsAdd.pending, (state, _) => {
        state.addLoading = true;
        state.error = '';
      });

    // delete contact
    builder
      .addCase(contactsDelete.fulfilled, (state, action) => {
        state.removeIndex = '';
        const idx = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(idx, 1);
      })
      .addCase(contactsDelete.rejected, (state, _) => {
        state.removeIndex = '';
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { predictRemove, contactsReset, contactsError } =
  contactsSlice.actions;
