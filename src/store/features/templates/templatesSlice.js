import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const API_URL = "http://localhost:4000";

export const templatesSlice = createSlice({
  name: 'template',
  initialState: {
    templates: [],
    newTemplate: {},
    deleted: {},
    error: false
  },
  reducers: {
    postTemplate: (state, action ) => {
      state.newTemplate = action.payload
    },
    getTemplates: (state, action) => {
      state.templates= action.payload;
    },
    deleteTemplates: (state, action) => {
      state.deleted= action.payload;
    },
    updateError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const getTemplatesAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/administrator`);
    dispatch(getTemplates(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const postTemplateAsync = (navigate, payload) => async (dispatch) => {
  console.log('template: ', payload)
  try {
    const { data } = await axios({
      method: "POST",
      baseURL: API_URL,
      data: payload,
      url: `/administrator`,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    dispatch(postTemplate([data]))
    navigate('/formFeedback')
  } catch (err) {
    dispatch(updateError(true))
    navigate('/formFeedback')  }
};

export const deleteTemplateAsync = (id) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      baseURL: API_URL,
      url: `/administrator/${id}`,
    })
    dispatch(getTemplates(data))
  } catch (err) {
    throw new Error(err);
  }
};

export const cleanError = () => async (dispatch) => {
  dispatch(updateError(false))
}

export const { postTemplate, getTemplates, updateError } = templatesSlice.actions;

export default templatesSlice.reducer;