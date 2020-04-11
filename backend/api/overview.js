const router = require('express').Router();
const { asyncTryCatchWrapper } = require('../util/helper-functions');
const {
	findRecentGovCoronaVirusTweets,
	findRecentPresCoronaVirusTweets,
	findRecentCDCCoronaVirusTweets,
	findRecentSurgeonGeneralCoronaVirusTweets,
	findRecentWHOCoronaVirusTweets,
} = require('../services/twitterAPI');
const { getCountryData } = require('../services/novelCovidAPI');
const { getStateData } = require('../services/novelCovidAPI');
const { getWorldData } = require('../services/novelCovidAPI');

router.get('/:state', async (req, res) => {
	const govTweets = await asyncTryCatchWrapper(
		findRecentGovCoronaVirusTweets,
		req.params.state,
	);
	const presTweets = await asyncTryCatchWrapper(
		findRecentPresCoronaVirusTweets,
	);
	const cdcTweets = await asyncTryCatchWrapper(
		findRecentCDCCoronaVirusTweets,
	);
	const surgeonGeneralTweets = await asyncTryCatchWrapper(
		findRecentSurgeonGeneralCoronaVirusTweets,
	);

	const whoTweets = await asyncTryCatchWrapper(
		findRecentWHOCoronaVirusTweets,
	);

	const stateData = await asyncTryCatchWrapper(
		getStateData,
		req.params.state,
	);
	const countryData = await asyncTryCatchWrapper(getCountryData, 'USA');
	const worldData = await asyncTryCatchWrapper(getWorldData);
	res.json({
		state: req.params.state,
		tweetData: {
			govTweets,
			presTweets,
			cdcTweets,
			surgeonGeneralTweets,
			whoTweets,
		},
		locationData: {
			stateData,
			countryData,
			worldData,
		},
	});
});

module.exports = router;
/**
 *
 * governor tweets
 * state stats
 * usa stats
 * cdc news
 */
