import { createSlice } from "@reduxjs/toolkit";

const initialState = { url: "" };

const loginProfileImgSlice = createSlice({
  name: "set-profile-img",
  initialState,
  reducers: {
    setProfileImgUrlAction(state, action) {
      state.url = action.payload;
    },
  },
});

export const { setProfileImgUrlAction } = loginProfileImgSlice.actions;
export default loginProfileImgSlice.reducer;
