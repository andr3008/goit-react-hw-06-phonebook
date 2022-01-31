import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./phonebook/phonebook-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const todosPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(todosPersistConfig, contactsReducer),
  },
  middleware,
});
export const persistor = persistStore(store);
