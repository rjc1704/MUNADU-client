import { combineReducers } from "redux";
import userReducer from "./userReducer";
import martialReducer from "./martialReducer";
import reviewReducer from "./reviewReducer";
import commentReducer from "./commentReducer";
import replyReducer from "./replyReducer";
import channelReducer from "./channelReducer";
import authReducer from "./authReducer";
import surveyReducer from "./surveyReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["authReducer"],
};

const rootReducer = combineReducers({
  userReducer,
  martialReducer,
  reviewReducer,
  commentReducer,
  replyReducer,
  channelReducer,
  authReducer,
  surveyReducer,
});
// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
