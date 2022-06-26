import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "http://localhost:4000";

export const claimSlide = createSlice({
  name: "claim",
  initialState: {
    data: [],
    claimsTemplates: []
  },
  reducers: {
    postClaim: (state, action) => {
      state.data.push(action.payload);
    },
    getClaimsSuits: (state, action) => {
      state.claimsTemplates= action.payload;
    }
  }
});

export const getClaimsSuitsAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/administrator`);
    console.log('response: ', response.data)
    dispatch(getClaimsSuits(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

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

export const { postClaim, getClaimsSuits } = claimSlide.actions;
export const showSuitsTemplates = (state) => state.todo.claimsTemplates;

export default claimSlide.reducer;