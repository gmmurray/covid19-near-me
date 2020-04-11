import React from 'react';

import './styles.scss';
import Section from '../../components/section';
import TweetRow from './tweetRow';
import Level from '../../components/level';
import { createStateItems, createCountryItems, createWorldItems } from '../../util/levelItemsHelper';

const OverviewDisplay = props => {
    const { state, tweetData, locationData } = props.data;
    
    const renderTweets = (data, title) => {
        if (data && typeof data === 'object' && data.constructor === Array && data.length) {
            return <TweetRow data={data} title={title} />
        } else {
            return <h3 className="is-size-3">No relevant tweets could be found</h3>
        }
    }
	return (
		<>
			<Section withContainer>
				<h1 className="is-size-1">{state}</h1>
			</Section>

			<Section withContainer>
                {renderTweets(tweetData.govTweets, 'Governor Tweets')}
			</Section>

			<Section withContainer>
                <Level title="State Data" items={createStateItems(locationData.stateData)} titleSize="3" />
            </Section>

            <Section withContainer>
                {renderTweets(tweetData.presTweets, 'President Tweets')}
            </Section>

            <Section withContainer>
                {renderTweets(tweetData.cdcTweets, 'CDC Tweets')}
            </Section>

            <Section withContainer>
                {renderTweets(tweetData.surgeonGeneralTweets, 'Surgeon General Tweets')}
            </Section>

			<Section withContainer>
                <Level title="Country Data" items={createCountryItems(locationData.countryData)} titleSize="3" />
            </Section>

            <Section withContainer>
                {renderTweets(tweetData.whoTweets, 'World Health Organization Tweets')}
            </Section>

			<Section withContainer>
                <Level title="World Data" items={createWorldItems(locationData.worldData)} titleSize="3" />
            </Section>
		</>
	);
};

export default OverviewDisplay;
