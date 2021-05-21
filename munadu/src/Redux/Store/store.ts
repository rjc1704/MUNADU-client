import rootReducer from "../Reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const middlewares = [...getDefaultMiddleware(), logger];
export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
export default { store, persistor };
