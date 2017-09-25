import axios from 'axios';

const API_KEY = 'd128fa047d7cad874fd0aee98a065bfa';
const API_URL = `appid=${API_KEY}`
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`; 

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}q=${city},us&${API_URL}`;
  const request = axios.get(url);

  return({
        type: FETCH_WEATHER,
        payload: request
  });
}