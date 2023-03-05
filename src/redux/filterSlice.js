import { createSlice } from '@reduxjs/toolkit';

const staticName = 'filter';
const filterInitialState = { value: '' };

const filterSlice = createSlice({
  name: staticName,
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;

/*
export const persistedFilterReducer = persistReducer(
  { key: staticName, storage },
  filtersReducer
);*/
