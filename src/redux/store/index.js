import reducers from "@reducers";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

const middlewares = composeWithDevTools(applyMiddleware(thunk, logger));
const store = createStore(reducers, middlewares);
const persistor = persistStore(store);

export { store, persistor };
