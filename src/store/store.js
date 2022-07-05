import { configureStore } from "@reduxjs/toolkit";
import todoSlide from "./features/todoSlice";
import claimsSlice from './features/claims/claimsSlice';
import templatesSlice from './features/templates/templatesSlice';

export default configureStore({
  reducer: {
    hola: todoSlide,
    claims: claimsSlice,
    templates: templatesSlice,
  }
});