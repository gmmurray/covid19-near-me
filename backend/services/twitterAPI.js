const Twitter = require('twitter');

const { getGovernor } = require('./governors');

const client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const searchTerms = [
	'corona',
	'coronavirus',
	'corona virus',
	'covid',
	'quarantine',
	'ventilator',
	'case',
	'hospital',
];

const filterTweets = tweets => {
	return tweets.filter(tweet => {
		const normalizedTweetText = tweet.text.toLowerCase();
		return searchTerms.some(term => normalizedTweetText.includes(term));
	});
};

const getTweetsByUsername = (username, includeRetweets = false) => {
	const queryObj = {
		screen_name: username,
		exclude_replies: true,
		include_rts: includeRetweets,
		count: 1000,
	};

	return client.get('/statuses/user_timeline', queryObj);
};

const findRecentGovCoronaVirusTweets = async (state, numTweets = 3) => {
	const governor = getGovernor(state);

	if (!governor) throw 'Invalid or missing governor';

	const tweets = await getTweetsByUsername(governor.twitter_handle);

	let filteredTweets = filterTweets(tweets);

	if (!filteredTweets.length) {
		const tweetsWithRetweets = await getTweetsByUsername(
			governor.twitter_handle,
			true,
		);

		// If there are no tweets, try getting tweets again but including retweets this time
		filteredTweets = filterTweets(tweetsWithRetweets);

		if (!filteredTweets.length)
			throw 'No applicable tweets found for given user';
	}

	// return only ids and time stamps
	return filteredTweets
		.map(element => {
			return { id: element.id, timeStamp: element.created_at };
		})
		.slice(0, numTweets);
	//return filteredTweets.slice(0, numTweets);
};

const findRecentPresCoronaVirusTweets = async (numTweets = 3) => {
	const presidentTwitterHandle = 'realDonaldTrump';
	const tweets = await getTweetsByUsername(presidentTwitterHandle);

	let filteredTweets = filterTweets(tweets);

	if (!filteredTweets.length) {
		const tweetsWithRetweets = await getTweetsByUsername(
			presidentTwitterHandle,
			true,
		);

		// If there are no tweets, try getting tweets again but including retweets this time
		filteredTweets = filterTweets(tweetsWithRetweets);

		if (!filteredTweets.length)
			throw 'No applicable tweets found for given user';
	}

	// return only ids and time stamps TODO use numTweets to return only a certain number of tweets
	return filteredTweets
		.map(element => {
			return { id: element.id, timeStamp: element.created_at };
		})
		.slice(0, numTweets);
	//return filteredTweets.slice(0, numTweets);
};

const findRecentCDCCoronaVirusTweets = async (numTweets = 3) => {
	const cdcTwitterHandle = 'CDCgov';
	const tweets = await getTweetsByUsername(cdcTwitterHandle);

	let filteredTweets = filterTweets(tweets);

	if (!filteredTweets.length) {
		const tweetsWithRetweets = await getTweetsByUsername(
			cdcTwitterHandle,
			true,
		);

		// If there are no tweets, try getting tweets again but including retweets this time
		filteredTweets = filterTweets(tweetsWithRetweets);

		if (!filteredTweets.length)
			throw 'No applicable tweets found for given user';
	}

	// return only ids and time stamps TODO use numTweets to return only a certain number of tweets
	return filteredTweets
		.map(element => {
			return { id: element.id, timeStamp: element.created_at };
		})
		.slice(0, numTweets);
	//return filteredTweets.slice(0, numTweets);
};

const findRecentSurgeonGeneralCoronaVirusTweets = async (numTweets = 3) => {
	const surgeonGeneralTwitterHandle = 'Surgeon_General';
	const tweets = await getTweetsByUsername(surgeonGeneralTwitterHandle);

	let filteredTweets = filterTweets(tweets);

	if (!filteredTweets.length) {
		const tweetsWithRetweets = await getTweetsByUsername(
			surgeonGeneralTwitterHandle,
			true,
		);

		// If there are no tweets, try getting tweets again but including retweets this time
		filteredTweets = filterTweets(tweetsWithRetweets);

		if (!filteredTweets.length)
			throw 'No applicable tweets found for given user';
	}

	// return only ids and time stamps TODO use numTweets to return only a certain number of tweets
	return filteredTweets
		.map(element => {
			return { id: element.id, timeStamp: element.created_at };
		})
		.slice(0, numTweets);
	// return filteredTweets.slice(0, numTweets);
};

module.exports = {
	getTweetsByUsername,
	findRecentGovCoronaVirusTweets,
	findRecentPresCoronaVirusTweets,
	findRecentCDCCoronaVirusTweets,
	findRecentSurgeonGeneralCoronaVirusTweets,
};
