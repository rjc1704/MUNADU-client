import rootReducer from "../Reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
export default { store, persistor };
export type RootState = ReturnType<typeof rootReducer>;
