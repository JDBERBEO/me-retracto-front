import { configureStore } from "@reduxjs/toolkit";
import todoSlide from "./features/todoSlice";
import claimsSlice from './features/claims/claimsSlice';

export default configureStore({
  reducer: {
    hola: todoSlide,
    claims: claimsSlice,
  }
});