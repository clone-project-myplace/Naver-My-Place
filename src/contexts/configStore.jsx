import { configureStore } from "@reduxjs/toolkit";

import tabModeSlice from "./reducers/tabModeSlice";
import loginProfileImgSlice from "./reducers/loginProfileImgSlice";

const rootReducer = { tabModeSlice, loginProfileImgSlice };
const store = configureStore({ reducer: rootReducer });

export default store;
