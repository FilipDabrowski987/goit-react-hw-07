import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

const contactsSlices = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

  reducers: {

    // fetchingInProgress(state) {
    //   state.isLoading = true;
    // },

    // fetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = Array.isArray(action.payload) ? action.payload : [];
    // },

    // fetchingError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    
    deleteContact: (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlices.actions;
export default contactsSlices.reducer;
