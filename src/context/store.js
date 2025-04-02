import { configureStore } from "@reduxjs/toolkit";

// slices
import language from "./slices/language.slice";
import product from "./slices/productCategory.slice";
import vacancy from "./slices/vacancy.slice";


export const store = configureStore({
  reducer: {
    language,
    product,
    vacancy
  },
  devTools: process.env.NODE_ENV !== "production",
});
