import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./reducers/counterSlice";

const rootReducer = { counterSlice: counterSlice };
const store = configureStore({ reducer: rootReducer });

export default store;
