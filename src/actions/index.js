import axios from 'axios';

const API_KEY = '2a0baec034700f64a699be83c01f51bb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},NL`;
	const request = axios.get(url);

	console.log('Request: ', request);

	//actions always return an object that must have a type
	return {
		type: FETCH_WEATHER,
		payload: request
	}
};