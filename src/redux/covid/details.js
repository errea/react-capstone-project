import dayjs from 'dayjs';
import { GET_COVID_DETAILS, 
    GET_COVID_SUCCESS_DETAILS, 
    GET_COVID_ERR_DETAILS 
} from '../slices/covidSlice';


const today = dayjs().format('YYYY-MM-DD');

// Initialize state

const initialState = {
  covidDetails: [],
};

// Reducer function

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_DETAILS:
      return { ...state, pending: true };
    case GET_COVID_SUCCESS_DETAILS:
    return {
            ...state,
            pending: false,
            covidDetails: action.details.dates[today].countries,
    };
    case GET_COVID_ERR_DETAILS:
      return { 
          ...state, pending: false, error: action.error };
          default:
          return state;
  }
};

export default reducer;
