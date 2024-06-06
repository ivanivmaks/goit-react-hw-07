import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilter } = slice.actions;
export const getFilters = (state) => state.filters.name || '';
export const filtersReducer = slice.reducer;
