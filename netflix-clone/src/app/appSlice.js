import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    user: {
      name: "khoa",
    },
    showMovieInfoModal: false,
    showVideoModal: false,
    isShowMovieInfo: true, //true: the opening info is movie, false: .....is TV Show
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
    setIsShowMovieInfo: (state, payload) => {
      state.isShowMovieInfo = payload.payload;
    },
    setShowMovieInfoModal: (state, payload) => {
      state.showMovieInfoModal = payload.payload;
    },
    setShowVideoModal: (state, payload) => {
      state.showVideoModal = payload.payload;
    },
  },
});

export const {
  setIsShowMovieInfo,
  login,
  logout,
  setShowMovieInfoModal,
  setShowVideoModal,
} = appSlice.actions;
export default appSlice.reducer;
