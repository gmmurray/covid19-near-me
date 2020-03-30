import React from 'react';
import Spinner from '../../components/spinner';
import Container from '../../components/container';

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
		<section className="section">
			<Container className="has-text-centered">
				<h1 className="is-size-1">{country}</h1>
				<h5 className="subtitle is-5">
					Last updated {updatedDate.toDateString()}
				</h5>
				<nav className="level">
					<div className="level-item has-text-centered">
						<div>
							<p className="heading">Cases</p>
							<p className="title">{cases}</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
							<p className="heading">Cases Today</p>
							<p className="title">{todayCases}</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
							<p className="heading">Deaths</p>
							<p className="title">{deaths}</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
							<p className="heading">Deaths Today</p>
							<p className="title">{todayDeaths}</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
							<p className="heading">Recovered</p>
							<p className="title">{recovered}</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
							<p className="heading">Active</p>
							<p className="title">{active}</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
							<p className="heading">Critical</p>
							<p className="title">{critical}</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
							<p className="heading">Cases/Million</p>
							<p className="title">{casesPerOneMillion}</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
							<p className="heading">Deaths/Million</p>
							<p className="title">{deathsPerOneMillion}</p>
						</div>
					</div>
				</nav>
			</Container>
		</section>
	);
};

export default SingleCountry;
