import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "http://localhost:4000";

export const contactUsSlice = createSlice({
  name: "contactUs",
  initialState: {
    contactUs: [],
    error: false,
  },
  reducers: {
    postContactUs: (state, action) => {
      state.contactUs = action.payload
    },
    updateError: (state, action) => {
      state.error = action.payload
    }
  }
});

export const postContactUsAsync = (contactUs) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      baseURL: API_URL,
      data: contactUs,
      url: 'contactUs/postContactUs'
    })
    updateError(false)
    postContactUs(data)
  } catch (err) {
    dispatch(updateError(true))
    console.error(err.data)
  }
};

export const { postContactUs, updateError } = contactUsSlice.actions;

export default contactUsSlice.reducer;