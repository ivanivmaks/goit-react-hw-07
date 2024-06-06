import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./contactsOps";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.items = action.payload;
         state.loading = false;
        state.error = false;
      })
      .addCase(getContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.isLoading = false;
        state.error = false;
      });
  },
});

export const loading = (state) => state.contacts.loading;
export const error = (state) => state.contacts.error;
export const getItems = (state) => state.contacts.items;
export const contactsReducer = slice.reducer;
