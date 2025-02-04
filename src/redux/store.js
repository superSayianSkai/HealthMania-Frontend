// store keeps the state in one place
import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./reducer";
const store = configureStore({ toggleReducer });

export default store;
