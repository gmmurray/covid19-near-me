// This service uses the great API provided by the NovelCOVID repository https://github.com/NovelCOVID/API
const covid = require('novelcovid');
const axios = require('axios');

const getStateData = async state => {
	let result = state
		? await covid.getState({ state })
		: await covid.getState();
	return result;
};

const getCountryData = async country => {
	let result = country
		? await covid.getCountry({ country })
		: await covid.getCountry();
	return result;
};

const getWorldData = async () => {
	return await covid.getAll();
};

const getHistoricalData = async country => {
	const result = country
		? await axios.get(`https://corona.lmao.ninja/v2/historical/${country}`)
		: await axios.get('https://corona.lmao.ninja/v2/historical/');
	return result.data;
};

module.exports = {
	getStateData,
	getCountryData,
	getWorldData,
	getHistoricalData,
};
