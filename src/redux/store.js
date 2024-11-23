import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist'
// import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// import storage from 'redux-persist/lib/storage'
import contactsReducer from "./contactsSlices";
import filtersReducer from "./filtersSlices";
// import contactsReducer from './contactsSlices';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
// }

// const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
      
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);