import axios from 'axios';

export const BASE_URL = 'http://localhost:5000/api';

export const getState = async state => {
	let result;
	try {
		result = await axios.get(`${BASE_URL}/states/${state}`);
	} catch (error) {
		result = undefined;
	}
	return result;
};

export const getCountry = async country => {
	let result;
	try {
		result = await axios.get(`${BASE_URL}/countries/${country}`);
	} catch (error) {
		result = undefined;
	}
	return result;
};

export const getCountryHistorical = async country => {
	let result;
	try {
		result = await axios.get(`${BASE_URL}/countries/historical/${country}`);
	} catch (error) {
		result = undefined;
	}
	return result;
};

export const getWorldStats = async () => {
	let result;
	try {
		result = await axios.get(`${BASE_URL}/world/`);
	} catch (error) {
		result = undefined;
	}
	return result;
};

export const getWorldMostImpacted = async () => {
	let result;
	try {
		result = await axios.get(`${BASE_URL}/countries?sort=cases&take=5`);
	} catch (error) {
		result = undefined;
	}
	return result;
};
