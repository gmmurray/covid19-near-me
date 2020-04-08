const Twitter = require('twitter');

const { getGovernor } = require('./governors');

const client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const getTweetsByUsername = (username) => {
	const queryObj = {
		screen_name: username,
		exclude_replies: true,
		include_rts: false,
		count: 1000,
	};

	return client.get('/statuses/user_timeline', queryObj);
};

const findRecentGovCoronaVirusTweets = async (state, numTweets) => {
	const governor = getGovernor(state);

    if (!governor) throw 'Invalid or missing governor';
    
    const tweets = await getTweetsByUsername(governor.twitter_handle);
    
	const filteredTweets = tweets.filter((tweet) => {
		const normalizedTweetText = tweet.text.toLowerCase();

		return searchTerms.some((term) => normalizedTweetText.includes(term));
	});

	if (!filteredTweets.length) {
		throw 'No tweets found for given user';
	}

	// return only ids and time stamps TODO use numTweets to return only a certain number of tweets
	// return filteredTweets.map(element => {return {id: element.id, timeStamp: element.created_at}});
	return filteredTweets;
};

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

module.exports = {
	getTweetsByUsername,
	findRecentGovCoronaVirusTweets,
};
