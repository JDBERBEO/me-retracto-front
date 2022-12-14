import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');
// eslint-disable-next-line no-undef
const API_URL = process.env.REACT_APP_SERVER_URL;

export const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState: {
    contactUs: [],
    error: false
  },
  reducers: {
    postContactUs: (state, action) => {
      state.contactUs = action.payload;
    },
    updateError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const postContactUsAsync = (contactUs) => async (dispatch) => {
  try {
    const { data } = await axios({
<<<<<<< HEAD
      method: "POST",
      baseURL: API_URL,
      data: contactUs,
      url: 'contactUs/postContactUs'
    })
    updateError(false)
    postContactUs(data)
    alert('TU MENSAJE HA SIDO ENVIADO CORRECTAMENTE')
  } catch (err) {
    dispatch(updateError(true))
    alert('UPPS..ALGO SALIÓ MAL Y TÚ MENSAJE NO HA SIDO ENVIADO CORRECTAMENTE')
    console.error(err.data)
=======
      method: 'POST',
      baseURL: API_URL,
      data: contactUs,
      url: 'contactUs/postContactUs'
    });
    updateError(false);
    postContactUs(data);
    alert('TU MENSAJE HA SIDO ENVIADO CORRECTAMENTE');
  } catch (err) {
    dispatch(updateError(true));
    alert('UPPS..ALGO SALIÓ MAL Y TÚ MENSAJE NO HA SIDO ENVIADO CORRECTAMENTE');
    console.error(err.data);
>>>>>>> bd0e73ce935d17cc308b4bdc3f58c003475d2962
  }
};

export const { postContactUs, updateError } = contactUsSlice.actions;

<<<<<<< HEAD
export default contactUsSlice.reducer;
=======
export default contactUsSlice.reducer;
>>>>>>> bd0e73ce935d17cc308b4bdc3f58c003475d2962
