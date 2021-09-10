import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './homepage/covidhomepage';
import filterReducer from './details/detailspage';
import countryReducer from './filter/filterpage';

const rootReducer = combineReducers({
  covidData: dataReducer,
  filteredData: filterReducer,
  countries: countryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
