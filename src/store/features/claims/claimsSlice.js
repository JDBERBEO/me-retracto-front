import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "http://localhost:4000";

export const claimSlide = createSlice({
  name: "claim",
  initialState: {
    data: [],
  },
  reducers: {
    postClaim: (state, action) => {
      state.data.push(action.payload);
    },
  }
});

export const postClaimAsync = (navigate,claim) => async (dispatch) => {
  console.log('claim: ', claim)
  try {
    const { data } = await axios({
      method: "POST",
      baseURL: API_URL,
      data: claim,
      url: `/customer/${claim.claimFields.id}`
    })
    dispatch(postClaim(data))
    navigate('/formFeedback')
  } catch (err) {
    throw new Error(err);
  }
};

export const { postClaim } = claimSlide.actions;

export default claimSlide.reducer;