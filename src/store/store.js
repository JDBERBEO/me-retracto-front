import { configureStore } from "@reduxjs/toolkit";
import claimsSlice from './features/claims/claimsSlice';
import templatesSlice from './features/templates/templatesSlice';
import adminSlice from './features/admin/adminSlice';

export default configureStore({
  reducer: {
    claims: claimsSlice,
    templates: templatesSlice,
    admin: adminSlice,
  }
});