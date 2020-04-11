import React from 'react';
import Spinner from '../../components/spinner';
import Container from '../../components/container';
import Level from '../../components/level';
import { createWorldItems } from '../../util/levelItemsHelper';

const WorldStats = props => {
	const updatedDate = new Date(props.data.updated);

	const title = 'Worldwide Stats';
	const subtitle = `Last updated ${updatedDate.toDateString()}`;
	const items = createWorldItems(props.data);

	if (props.networkError) {
		return (
			<section className="section">
				<Container className="has-text-centered">
					<h1 className="is-size-3">
						Sorry, we encountered an error while trying to connect.
						Refresh to try again.
					</h1>
				</Container>
			</section>
		);
	}

	if (props.isLoading) {
		return (
			<section className="section">
				<Container className="has-text-centered">
					<Spinner />
				</Container>
			</section>
		);
	}

	return <Level title={title} subtitle={subtitle} items={items} />;
};

export default WorldStats;
