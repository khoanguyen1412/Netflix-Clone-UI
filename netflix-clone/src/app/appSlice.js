import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    user: {
      name: "khoa",
    },
  },
  reducers: {
    login: (state, action) => {
      state.user = {
        name: "khoa",
      };
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = appSlice.actions;
//export const selectUser = (state) => state.app.user;
export default appSlice.reducer;
