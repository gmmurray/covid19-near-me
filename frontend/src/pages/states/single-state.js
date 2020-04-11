import React from 'react';
import Spinner from '../../components/spinner';
import Container from '../../components/container';
import Level from '../../components/level';

const SingleState = (props) => {
	const {
		state,
		cases,
		todayCases,
		deaths,
		todayDeaths,
		active,
	} = props.currentState;

	const items = [
		{ name: 'Cases', statistic: cases },
		{ name: 'Cases Today', statistic: todayCases },
		{ name: 'Deaths', statistic: deaths },
		{ name: 'Deaths Today', statistic: todayDeaths },
		{ name: 'Active', statistic: active },
	];

	if (props.networkError) {
		return (
			<section className="section">
				<Container className="has-text-centered">
					<h1 className="is-size-3">
						Sorry, we encountered an error while trying to connect.
						Select a state to try again.
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

	if (!state) {
		return (
			<section className="section">
				<Container className="has-text-centered">
					<h1 className="is-size-1">Select a state</h1>
				</Container>
			</section>
		);
	}

	return (
		<Level title={state} items={items} />
	);
};

export default SingleState;
