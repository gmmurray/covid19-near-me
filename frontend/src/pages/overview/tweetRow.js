import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TweetRow = (props) => {
	const { data, title } = props;
	return (
		<>
			<h3 className="is-size-3">{title}</h3>
			<div className="columns has-text-centered">
				{data.map((element) => {
					return (
						<div className="column" key={element.id}>
							<TwitterTweetEmbed
								tweetId={element.id}
								options={{
									cards: 'hidden',
								}}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default TweetRow;
