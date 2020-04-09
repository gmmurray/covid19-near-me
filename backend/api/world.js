const router = require('express').Router();
const {
	getWorldData,
	getHistoricalData,
} = require('../services/novelCovidAPI');

router.get('/', async (req, res) => {
	try {
		const result = await getWorldData();
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json({ error });
	}
});

router.get('/historical', async (req, res) => {
	try {
		const result = await getHistoricalData();
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;
