import { createSlice } from "@reduxjs/toolkit";

const contactsSlices = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },

  reducers: {

    fetchingInProgress(state) {
      state.isLoading = true;
    },

    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = Array.isArray(action.payload) ? action.payload : [];
    },

    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    
    deleteContact: (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError, addContact, deleteContact } = contactsSlices.actions;
export default contactsSlices.reducer;
