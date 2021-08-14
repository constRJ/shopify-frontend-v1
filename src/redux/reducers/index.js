import { combineReducers } from "redux";
import accountReducer from "./account";

// const persistConfig = {
//   key: "shopify",
//   storage,
//   whiteList: ["account"],
// };

export default combineReducers({
  account: accountReducer,
});

// export default persistReducers(persistConfig, rootReducer);
