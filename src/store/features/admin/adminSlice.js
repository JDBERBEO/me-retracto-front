import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "http://localhost:4000";

export const adminSlice = createSlice({
  name: "admin",
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

export const postLoginAsync = (user, navigate) => async (dispatch) => {
  console.log('user: ', user)
  try {
    const { data } = await axios({
      method: "POST",
      baseURL: API_URL,
      data: user,
      url: `/administrator/signin`
    })
    console.log('data: ', data)
    localStorage.setItem('admin', data.token)
    updateError(false)
    navigate('/suitsTemplates')
  } catch (err) {
    dispatch(updateError(true))
    // navigate('/formFeedback')
    console.error(err.data)
    // throw new Error(err);
  }
};

export const { postLogin, updateError } = adminSlice.actions;

export default adminSlice.reducer;