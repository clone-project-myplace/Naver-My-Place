import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./reducers/counterSlice";
import tabModeSlice from "./reducers/tabModeSlice";

const rootReducer = { counterSlice, tabModeSlice };
const store = configureStore({ reducer: rootReducer });

export default store;
