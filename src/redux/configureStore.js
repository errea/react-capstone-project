import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './covidhomepage/covidhomepage';
import filterReducer from './detailspage/details';
import countryReducer from './filterpage/filterpage';

const rootReducer = combineReducers({
  covidData: dataReducer,
  filteredData: filterReducer,
  countries: countryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
