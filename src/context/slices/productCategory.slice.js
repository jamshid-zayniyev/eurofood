import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: "varenya",
  activeProduct:null,
  filteredProducts:null
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      state.product = payload
    },
    setProductActive: (state, { payload }) => {
        state.activeProduct = payload
      },
  },
});

// Action creators are generated for each case reducer function
export const { setProduct,setProductActive} = productSlice.actions;

export default productSlice.reducer;
