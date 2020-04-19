// This service uses the great API provided by the NovelCOVID repository https://github.com/NovelCOVID/API
const axios = require('axios');
const NovelCovid = require('novelcovid');

const getStateData = async state => {
	const result = state
		? await axios.get(`https://corona.lmao.ninja/v2/states/${state}`)
		: await axios.get('https://corona.lmao.ninja/v2/states');
	return result.data;
};

const getCountryData = async country => {
	const result = country
		? await axios.get(`https://corona.lmao.ninja/v2/countries/${country}`)
		: await axios.get('https://corona.lmao.ninja/v2/countries');
	return result.data;
};

const getSortedCountryData = async sort => {
	const result = sort
		? await axios.get(`https://corona.lmao.ninja/v2/countries?sort=${sort}`)
		: await axios.get('https://corona.lmao.ninja/v2/countries');
	return result.data;
};

const getWorldData = async () => {
	const result = await axios.get('https://corona.lmao.ninja/v2/all');
	return result.data;
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
	getSortedCountryData,
	getWorldData,
	getHistoricalData,
};
