const router = require('express').Router();
const { asyncTryCatchWrapper } = require('../util/helper-functions');
const {
	findRecentGovCoronaVirusTweets,
	findRecentPresCoronaVirusTweets,
	findRecentCDCCoronaVirusTweets,
	findRecentSurgeonGeneralCoronaVirusTweets,
} = require('../services/twitterAPI');
const { getCountryData } = require('../services/novelCovidAPI');
const { getStateData } = require('../services/novelCovidAPI');
const { getWorldData } = require('../services/novelCovidAPI');

router.get('/', async (req, res) => {
	const govTweets = await asyncTryCatchWrapper(
		findRecentGovCoronaVirusTweets,
		req.query.state,
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

	const stateData = await asyncTryCatchWrapper(getStateData, req.query.state);
	const countryData = await asyncTryCatchWrapper(getCountryData, 'USA');
	const worldData = await asyncTryCatchWrapper(getWorldData);
	res.json({
		govTweets,
		presTweets,
		cdcTweets,
		surgeonGeneralTweets,
		stateData,
		countryData,
		worldData,
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
