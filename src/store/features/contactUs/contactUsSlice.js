import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');
// eslint-disable-next-line no-undef
const API_URL = process.env.REACT_APP_SERVER_URL;

export const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState: {
    contactUs: [],
    error: false
  },
  reducers: {
    postContactUs: (state, action) => {
      state.contactUs = action.payload;
    },
    updateError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const postContactUsAsync = (contactUs) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: 'POST',
      baseURL: API_URL,
      data: contactUs,
      url: 'contactUs/postContactUs'
    });
    updateError(false);
    postContactUs(data);
    alert('TU MENSAJE HA SIDO ENVIADO CORRECTAMENTE');
  } catch (err) {
    dispatch(updateError(true));
    alert('UPPS..ALGO SALIÓ MAL Y TÚ MENSAJE NO HA SIDO ENVIADO CORRECTAMENTE');
    console.error(err.data);
  }
};

export const { postContactUs, updateError } = contactUsSlice.actions;

export default contactUsSlice.reducer;
