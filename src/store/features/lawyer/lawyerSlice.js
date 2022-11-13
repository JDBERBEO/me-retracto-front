import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');
// eslint-disable-next-line no-undef
const API_URL = process.env.REACT_APP_SERVER_URL;

export const lawyerSlice = createSlice({
  name: 'lawyer',
  initialState: {
    user: [],
    error: false
  },
  reducers: {
    postLogin: (state, action) => {
      state.data.push(action.payload);
    },
    updateError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const postLawyerLoginAsync = (user, navigate) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: 'POST',
      baseURL: API_URL,
      data: user,
      url: 'lawyer/signin'
    });
    localStorage.setItem('lawyer', data.token);
    updateError(false);
    navigate('/lawyerClaims');
  } catch (err) {
    dispatch(updateError(true));
    console.error(err.data);
  }
};

export const { postLogin, updateError } = lawyerSlice.actions;

export default lawyerSlice.reducer;
