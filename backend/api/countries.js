const router = require('express').Router();
const { getCountryData, getHistoricalData } = require('../services/novelCovidAPI');

router.get('/', async (req, res) => {
    try {
		const result = await getCountryData(req.query.country);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json({ error });
	}
});

router.get('/historical', async (req, res) => {
    try {
		const result = await getHistoricalData(req.query.country);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;