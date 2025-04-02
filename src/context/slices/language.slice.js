import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "ru",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguage} = languageSlice.actions;

export default languageSlice.reducer;
