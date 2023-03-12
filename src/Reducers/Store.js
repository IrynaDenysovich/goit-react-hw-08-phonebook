import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './AuthSlice';
import { filtersReducer } from './FilterSlice';
import { contactsReducer } from './ContactsSlice';

export const Store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    auth: authReducer,
  },
});
