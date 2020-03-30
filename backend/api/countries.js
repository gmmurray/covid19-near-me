const router = require('express').Router();
const { getCountryData, getSortedCountryData, getHistoricalData } = require('../services/novelCovidAPI');

router.get('/:name', async (req, res) => {
    try {
		const result = await getCountryData(req.params.name);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json({ error });
	}
});

router.get('', async (req, res) => {
    try {
		const result = await getSortedCountryData(req.query.sort);
		const shortenedResult = req.query.take ? result.slice(0, Number.parseInt(req.query.take)) : result;
		res.status(200).json(shortenedResult);
	} catch (error) {
		res.status(400).json({ error });
	}
});

router.get('/historical/:name', async (req, res) => {
    try {
		const result = await getHistoricalData(req.params.name);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;