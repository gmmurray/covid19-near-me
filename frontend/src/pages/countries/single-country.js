import React from 'react';
import Spinner from '../../components/spinner';
import Container from '../../components/container';
import Level from '../../components/level';

const SingleCountry = props => {
	const {
		message,
		country,
		cases,
		todayCases,
		deaths,
		todayDeaths,
		recovered,
		active,
		critical,
		casesPerOneMillion,
		deathsPerOneMillion,
		updated,
	} = props.currentCountry;

	const updatedDate = new Date(updated);
	const subtitle = `Last Updated ${updatedDate.toDateString()}`;
	
	const items = [
		{name: 'Cases', statistic: cases},
		{name: 'Cases Today', statistic: todayCases},
		{name: 'Deaths', statistic: deaths},
		{name: 'Deaths Today', statistic: todayDeaths},
		{name: 'Recovered', statistic: recovered},
		{name: 'Active', statistic: active},
		{name: 'Critical', statistic: critical},
		{name: 'Cases/Million', statistic: casesPerOneMillion},
		{name: 'Deaths/Million', statistic: deathsPerOneMillion},
	];

	if (props.networkError) {
		return (
			<section className="section">
				<Container className="has-text-centered">
					<h1 className="is-size-3">
						Sorry, we encountered an error while trying to connect.
						Select a country to try again.
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

	if (message) {
		return (
			<section className="section">
				<Container className="has-text-centered">
					<h1 className="is-size-3">{message}</h1>
				</Container>
			</section>
		);
	}

	if (!country) {
		return (
			<section className="section">
				<Container className="has-text-centered">
					<h1 className="is-size-1">Select a country</h1>
				</Container>
			</section>
		);
	}

	return (
		<Level title={country} subtitle={subtitle} items={items} />
	);
};

export default SingleCountry;
