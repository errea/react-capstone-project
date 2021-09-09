import dayjs from 'dayjs';

const GET_COVID_DETAILS = 'covid_details/detailsslice/GET_COVID_DETAILS';
const GET_COVID_SUCCESS_DETAILS = 'covid_details/detailsslice/GET_COVID_SUCCESS_DETAILS';
const GET_COVID_ERR_DETAILS = 'covid_details/detailsslice/GET_COVID_ERR_DETAILS';

const today = dayjs().format('YYYY-MM-DD');

const detailsURL = `https://api.covid19tracking.narrativa.com/api/${today}/country`;

const getDetails = (country) => async (dispatch) => {
  dispatch({ type: GET_COVID_DETAILS });
  console.log(`${detailsURL}${country}`);
  const response = await fetch(detailsURL);
  const details = await response.json();
  return dispatch({ type: GET_COVID_SUCCESS_DETAILS, details });
};

export {
  getDetails as default,
  GET_COVID_DETAILS,
  GET_COVID_SUCCESS_DETAILS,
  GET_COVID_ERR_DETAILS,
};
