import { configureStore } from '@reduxjs/toolkit';
import claimsSlice from './features/claims/claimsSlice';
import templatesSlice from './features/templates/templatesSlice';
import adminSlice from './features/admin/adminSlice';
import lawyerSlice from './features/lawyer/lawyerSlice';
import contactUsSlice from './features/contactUs/contactUsSlice';

export default configureStore({
  reducer: {
    claims: claimsSlice,
    templates: templatesSlice,
    admin: adminSlice,
    lawyer: lawyerSlice,
    contactUs: contactUsSlice
  }
});
