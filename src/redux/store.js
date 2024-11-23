import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import contactsSlice from "./contactsSlices";
import filtersSlice from "./filtersSlices";

const contactsPersistConfig = {
  key: 'contacts',
  storage,
}

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
      
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);