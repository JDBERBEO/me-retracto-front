import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "http://localhost:4000";

export const lawyerSlice = createSlice({
  name: "lawyer",
  initialState: {
    user: [],
    error: false,
  },
  reducers: {
    postLogin: (state, action) => {
      state.data.push(action.payload);
    },
    updateError: (state, action) => {
      state.error = action.payload
    }
  }
});

export const postLawyerLoginAsync = (user, navigate) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      baseURL: API_URL,
      data: user,
      url: 'lawyer/signin'
    })
    console.log('data: ', data)
    localStorage.setItem('lawyer', data.token)
    navigate('/lawyerClaims')
  } catch (err) {
    dispatch(updateError(true))
    console.error(err.data)
  }
};

export const { postLogin, updateError } = lawyerSlice.actions;

export default lawyerSlice.reducer;