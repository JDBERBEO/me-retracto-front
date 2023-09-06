/* eslint-disable @typescript-eslint/no-var-requires */
import { createSlice } from '@reduxjs/toolkit';
const axios = require('axios');
// eslint-disable-next-line no-undef
const API_URL = process.env.REACT_APP_SERVER_URL;

export const claimSlide = createSlice({
  name: 'claim',
  initialState: {
    previousCheckoutClaim: {},
    updateClaim: '',
    claims: [],
    error: false,
    filledClaim: {},
    loading: false,
    feedbackModal: false,
    currentClaim: {},
    currentStep: 1
  },
  reducers: {
    postClaim: (state, action) => {
      state.previousCheckoutClaim = action.payload;
      console.log('state postPreviousCheckClaim: ', state.previousCheckoutClaim);
    },
    updateClaim: (state, action) => {
      state.updateClaim = action.payload;
    },
    getClaims: (state, action) => {
      state.claims = action.payload;
    },
    updateError: (state, action) => {
      state.error = action.payload;
    },
    fillClaim: (state, action) => {
      state.filledClaim = { ...state.filledClaim, ...action.payload };
    },
    updateLoading: (state, action) => {
      state.loading = action.payload;
    },
    openModal: (state, action) => {
      state.feedbackModal = action.payload;
    },
    getClaim: (state, action) => {
      state.currentClaim = action.payload;
    },
    updateCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    }
    // getFilledClaim: (state, action) => {
    //   state.claim =action.payload
    // }
  }
});

export const fillClaimAsync = (info) => async (dispatch) => {
  try {
    dispatch(fillClaim(info));
  } catch (error) {
    console.error(error);
  }
};
export const updateStepper = (step) => (dispatch) => {
  try {
    dispatch(updateCurrentStep(step));
  } catch (error) {
    console.error(error);
  }
};

export const closeModalAsync = () => async (dispatch) => {
  try {
    dispatch(openModal(false));
  } catch (error) {
    console.error(error);
  }
};
export const postClaimAsync = (claim) => async (dispatch) => {
  updateLoading(true);
  const completeClaim = {
    claimFields: claim
  };
  try {
    const { data } = await axios({
      method: 'POST',
      baseURL: API_URL,
      data: completeClaim,
      url: `/customer/${completeClaim.claimFields.id}`,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    dispatch(updateLoading(false));
    console.log('data: ', data);
    dispatch(postClaim(data));
  } catch (err) {
    dispatch(updateLoading(false));
    dispatch(updateError(true));
  }
};

export const updateClaimAsync = (payload) => async (dispatch) => {
  dispatch(updateLoading(true));
  try {
    const token = localStorage.getItem('lawyer') || localStorage.getItem('admin');
    const { data } = await axios({
      method: 'PUT',
      baseURL: API_URL,
      data: payload,
      url: `/lawyer/${payload.id}`,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    });
    dispatch(updateClaim(data));
    dispatch(updateLoading(false));
    dispatch(
      openModal({
        open: true,
        operationStatus: 'success',
        message: 'El archivo se ha actualizado con éxito.'
      })
    );
  } catch (err) {
    dispatch(updateLoading(false));
    dispatch(updateError(true));
    dispatch(
      openModal({
        open: true,
        operationStatus: 'failed',
        status: err.response.status,
        message:
          'No se ha podido cargar ningún archivo. Recuerda que debes seleccionar un archivo antes.'
      })
    );
  }
};

export const updateClaimWithFiles = (payload) => async (dispatch) => {
  dispatch(updateLoading(true));
  try {
    const { data } = await axios({
      method: 'PUT',
      baseURL: API_URL,
      data: payload,
      url: `/customer/${payload.id}`,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    dispatch(updateLoading(false));
    console.log('data: ', data);
    dispatch(updateClaim(data));
  } catch (error) {
    dispatch(updateLoading(false));
    dispatch(updateError(true));
  }
};

export const updateClaimStatusAsync = (navigate, payload) => async (dispatch) => {
  dispatch(updateLoading(true));
  try {
    const token = localStorage.getItem('lawyer') || localStorage.getItem('admin');
    const { data } = await axios({
      method: 'PUT',
      baseURL: API_URL,
      data: payload,
      url: `/lawyer/updateClaimStatus/${payload.id}`,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    });
    dispatch(updateClaim(data));
    dispatch(updateLoading(false));
    dispatch(
      openModal({
        open: true,
        operationStatus: 'success',
        message: 'El estado de revisón se ha actualizado con éxito.'
      })
    );
  } catch (err) {
    dispatch(updateLoading(false));
    dispatch(updateError(true));
    dispatch(
      openModal({
        open: true,
        operationStatus: 'failed',
        status: err.response.status,
        message: 'No se ha podido actualizar el estado de revisión.'
      })
    );
  }
};

export const cleanError = () => async (dispatch) => {
  dispatch(updateError(false));
};

export const getClaimsAsync = () => async (dispatch) => {
  dispatch(updateLoading(true));
  try {
    const token = localStorage.getItem('lawyer') || localStorage.getItem('admin');
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/lawyer',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch(updateLoading(false));
    dispatch(getClaims(response.data));
  } catch (err) {
    dispatch(updateLoading(false));
    throw new Error(err);
  }
};

export const getOneClaimAsync = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('lawyer') || localStorage.getItem('admin');
    const { data } = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: `/lawyer/getClaim/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch(getClaim(data));
  } catch (error) {
    console.error('error:', error);
  }
};
export const getClaimbyTransactionIdAsync = (transactionId) => async (dispatch) => {
  dispatch(updateLoading(true));
  try {
    const { data } = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: `/customer/getClaim/${transactionId}`
    });
    dispatch(getClaim(data));
    dispatch(updateLoading(false));
  } catch (error) {
    console.error('error:', error);
    dispatch(updateLoading(false));
  }
};

export const deleteClaimAsync = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('admin');
    const { data } = await axios({
      method: 'DELETE',
      baseURL: API_URL,
      url: `/administrator/deleteClaims/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch(getClaims(data));
  } catch (error) {
    throw new Error(error);
  }
};

export const {
  postClaim,
  updateClaim,
  getClaims,
  updateError,
  fillClaim,
  getFilledClaim,
  updateLoading,
  openModal,
  getClaim,
  updateCurrentStep
} = claimSlide.actions;

export default claimSlide.reducer;
