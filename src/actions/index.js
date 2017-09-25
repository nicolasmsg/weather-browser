import axios from 'axios';

const WEATHER_API_KEY = 'd128fa047d7cad874fd0aee98a065bfa';
const WEATHER_API_URL = `appid=${WEATHER_API_KEY}`
const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`; 

const GMAP_API_KEY = " AIzaSyCljjq53w5XAGf1xdwP012Hwzp8--kUuXQ";
const GMAP_ROOT_URL = "https://maps.googleapis.com/maps/api/timezone/json?location=";

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_DATE = 'FETCH_DATE';

export function fetchWeather(city) {
  const url = `${WEATHER_ROOT_URL}q=${city},us&${WEATHER_API_URL}`;
  const request = axios.get(url);
  
  return({
        type: FETCH_WEATHER,
        payload: request
  });
}

export function fetchDate(lng, lat, timestamp) {
  const url = `${GMAP_ROOT_URL}${lng},${lat}&timestamp=${timestamp}&key=${GMAP_API_KEY}`;
  const request = axios.get(url);
  console.log('fetchDate');
  return({
        type: FETCH_DATE,
        payload: request
  });
}