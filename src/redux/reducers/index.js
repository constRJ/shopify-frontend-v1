import { combineReducers } from "redux";
import { persistReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import accountReducer from "./account";

const persistConfig = {
  key: "shopify",
  storage,
  whiteList: [""],
};

const rootReducer = combineReducers({
  account: accountReducer,
});

export default persistReducers(persistConfig, rootReducer);
