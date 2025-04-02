import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vacancy: null,
};

export const vacancySlice = createSlice({
  name: "vacancy",
  initialState,
  reducers: {
    setVacancy: (state, { payload }) => {
      state.vacancy = payload
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { setVacancy} = vacancySlice.actions;

export default vacancySlice.reducer;
