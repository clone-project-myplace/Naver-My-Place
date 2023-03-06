import { createSlice } from "@reduxjs/toolkit";

const initialState = { tab: 0 };
// 탭 왼쪽부터 0

const tabModeSlice = createSlice({
  name: "change-tab",
  initialState,
  reducers: {
    changeTab(state, action) {
      state.tab = action.payload;
    },
  },
});

export const { changeTab } = tabModeSlice.actions;
export default tabModeSlice.reducer;
