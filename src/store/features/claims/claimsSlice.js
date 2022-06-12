import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "http://localhost:4000";

export const claimSlide = createSlice({
  name: "claim",
  initialState: {
    data: []
  },
  reducers: {
    postClaim: (state, action) => {
      state.data.push(action.payload);
    },
    // getTodo: (state, action) => {
    //   state.data = [action.payload];
    // }
  }
});

// export const getTodoAsync = (data) => async (dispatch) => {
//   try {
//     const response = await axios.get(`${API_URL}/${data}`);
//     dispatch(getTodo(response.data));
//   } catch (err) {
//     throw new Error(err);
//   }
// };

export const postClaimAsync = (navigate,claim) => async (dispatch) => {
  console.log('claim: ', claim)
  try {
    // console.log(data);
    // const response = await axios.post(`${API_URL}/customer/:id`, data);
    // console.log(response);
    // dispatch(addTodo(response.data));
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
// export const showTodo = (state) => state.todo.data;

export default claimSlide.reducer;