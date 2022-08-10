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
    filledClaim: {},
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
    },
    fillClaim: (state, action) => {
      console.log('action: ', action.payload)
      // const info = action.payload
      state.filledClaim = {...state.filledClaim, ...action.payload}
    },
    // getFilledClaim: (state, action) => {
    //   state.claim =action.payload
    // }
  }
});

export const fillClaimAsync = (info) => async (dispatch) => {
  try {
    console.log('info: ', info)
    dispatch(fillClaim(info))
  } catch (error) {
    console.error('error: ', error)
  }
}
export const postClaimAsync = (navigate, claim, sendEmail, e) => async (dispatch) => {
  const completeClaim = {
    claimFields: claim
  }
  try {
    const { data } = await axios({
      method: "POST",
      baseURL: API_URL,
      data: completeClaim,
      url: `/customer/${completeClaim.claimFields.id}`
    })
    dispatch(postClaim(data))
    navigate('/formFeedback')
    sendEmail(e)
  } catch (err) {
    console.log('err:', err)
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

export const updateClaimStatusAsync = (navigate, payload) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "PUT",
      baseURL: API_URL,
      data: payload,
      url: `/lawyer/updateClaimStatus/${payload.id}`,
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

// export const getFilledClaimAsync = () => async (dispatch) => {
//   try {
//     const response = await axios.get(`${API_URL}/lawyer`);
//     dispatch(getClaims(response.data));
//   } catch (err) {
//     throw new Error(err);
//   }
// };

export const { postClaim, updateClaim, getClaims, updateError, fillClaim, getFilledClaim } = claimSlide.actions;

export default claimSlide.reducer;