import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    user: {
      name: "khoa",
    },
    showMovieInfoModal: false,
    showVideoModal: false,
    isShowVideoTV: false, //the showing video is movie or tv?
    isShowMovieInfo: true, //true: the opening info is movie, false: .....is TV Show
    isShowDrawer: false,
    //fetched data
    listMovies: [],
    listTVs: [],

    //toast
    isShowToast: false,
    toastText: "",
  },
  reducers: {
    setIsShowToast: (state, payload) => {
      state.isShowToast = payload.payload;
    },
    setToastText: (state, payload) => {
      state.toastText = payload.payload;
    },
    setListMovies: (state, payload) => {
      state.listMovies = payload.payload;
    },
    setListTVs: (state, payload) => {
      state.listTVs = payload.payload;
    },
    setIsShowDrawer: (state, payload) => {
      state.isShowDrawer = payload.payload;
    },

    login: (state, payload) => {
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
    setIsShowVideoTV: (state, payload) => {
      state.isShowVideoTV = payload.payload;
    },
  },
});

export const {
  setIsShowToast,
  setToastText,
  setListMovies,
  setListTVs,
  setIsShowMovieInfo,
  login,
  logout,
  setShowMovieInfoModal,
  setShowVideoModal,
  setIsShowVideoTV,
  setIsShowDrawer,
} = appSlice.actions;
export default appSlice.reducer;
