const router = require('express').Router();
const {
	findRecentGovCoronaVirusTweets,
	findRecentPresCoronaVirusTweets,
	findRecentCDCCoronaVirusTweets,
	findRecentSurgeonGeneralCoronaVirusTweets,
} = require('../services/twitterAPI');

router.get('/governor', async (req, res) => {
	try {
		const result = await findRecentGovCoronaVirusTweets(req.query.state);
		res.json(result);
	} catch (error) {
		res.json({ error });
	}
});

router.get('/president', async (req, res) => {
	try {
		const result = await findRecentPresCoronaVirusTweets();
		res.json(result);
	} catch (error) {
		res.json({ error });
	}
});

router.get('/cdc', async (req, res) => {
	try {
		const result = await findRecentCDCCoronaVirusTweets();
		res.json(result);
	} catch (error) {
		res.json({ error });
	}
});

router.get('/surgeon-general', async (req, res) => {
	try {
		const result = await findRecentSurgeonGeneralCoronaVirusTweets();
		res.json(result);
	} catch (error) {
		res.json({ error });
	}
});

module.exports = router;
