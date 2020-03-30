const router = require('express').Router();
const { getStateData } = require('../services/novelCovidAPI');
const { getGovernor } = require('../services/governors');

router.get('/:name', async (req, res) => {
	try {
		const result = await getStateData(req.params.name);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json({ error });
	}
});

router.get('/governor', (req, res) => {
	try {
		const result = getGovernor(req.query.name);
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;
