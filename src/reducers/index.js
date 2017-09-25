import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import dateReducer from './reducer_date';


const rootReducer = combineReducers({
  weather: WeatherReducer,
  date: dateReducer
});

export default rootReducer;
