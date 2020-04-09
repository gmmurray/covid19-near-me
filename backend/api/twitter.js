const router = require('express').Router();
const { findRecentGovCoronaVirusTweets } = require('../services/twitterAPI');

router.get('/governor', async (req, res) => {
	try {
		const result = await findRecentGovCoronaVirusTweets(
			req.query.state,
			null,
		);
		res.json(result);
	} catch (error) {
		res.json({ error });
	}
});

// get tweets for governor - api/states

// get tweets for country leader (and cdc if usa) - api/countries

module.exports = router;
