import React from 'react';

import './styles.scss';
import Section from '../../components/section';
import TweetRow from './tweetRow';

const OverviewDisplay = (props) => {
	const { state, tweetData, locationData } = props.data;
	return (
		<Section withContainer>
			<TweetRow data={tweetData.govTweets} title={'Governor Tweets'} />
		</Section>
	);
};

export default OverviewDisplay;
