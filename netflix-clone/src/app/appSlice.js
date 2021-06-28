import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    user: {
      name: "khoa",
    },
    showMovieInfoModal: false,
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
    setShowMovieInfoModal: (state, payload) => {
      console.log(payload);
      state.showMovieInfoModal = payload.payload;
    },
  },
});

export const { login, logout, setShowMovieInfoModal } = appSlice.actions;
//export const selectUser = (state) => state.app.user;
export default appSlice.reducer;
