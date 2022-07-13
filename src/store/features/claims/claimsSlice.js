import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "http://localhost:4000";

export const claimSlide = createSlice({
  name: "claim",
  initialState: {
    data: [],
    updateClaim: '',
    claims: []
  },
  reducers: {
    postClaim: (state, action) => {
      state.data.push(action.payload);
    },
    updateClaim: (state, action) =>{
      state.updateClaim =  action.payload
    },
    getClaims: (state, action) => {
      state.claims = action.payload
    }
  }
});

export const postClaimAsync = (navigate,claim) => async (dispatch) => {
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

export const updateClaimAsync = (navigate, payload) => async (dispatch) => {
  console.log('claim: ', payload.file)
  try {
    const { data } = await axios({
      method: "PUT",
      baseURL: API_URL,
      data: payload,
      url: `/lawyer/${payload.id}`,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    dispatch(updateClaim(data))
    navigate('/formFeedback')
  } catch (err) {
    throw new Error(err);
  }
};

export const getClaimsAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/lawyer`);
    dispatch(getClaims(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { postClaim, updateClaim, getClaims } = claimSlide.actions;

export default claimSlide.reducer;