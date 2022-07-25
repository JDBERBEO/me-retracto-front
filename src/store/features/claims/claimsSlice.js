import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "http://localhost:4000";

export const claimSlide = createSlice({
  name: "claim",
  initialState: {
    data: [],
    updateClaim: '',
    claims: [],
    error: false,
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
    },
    updateError: (state, action) => {
      state.error = action.payload
    }
  }
});

export const postClaimAsync = (navigate, claim, sendEmail, e) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      baseURL: API_URL,
      data: claim,
      url: `/customer/${claim.claimFields.id}`
    })
    dispatch(postClaim(data))
    navigate('/formFeedback')
    sendEmail(e)
  } catch (err) {
    dispatch(updateError(true))
    navigate('/formFeedback')
    // throw new Error(err);
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
    dispatch(updateError(true))
    navigate('/formFeedback')
  }
};

export const cleanError = () => async (dispatch) => {
  dispatch(updateError(false))
}

export const getClaimsAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/lawyer`);
    dispatch(getClaims(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { postClaim, updateClaim, getClaims, updateError } = claimSlide.actions;

export default claimSlide.reducer;