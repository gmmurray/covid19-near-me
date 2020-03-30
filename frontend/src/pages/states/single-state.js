import React from 'react';
import Spinner from '../../components/spinner';
import Container from '../../components/container';

const SingleState = props => {
	const {
		state,
		cases,
		todayCases,
		deaths,
		todayDeaths,
		active,
	} = props.currentState;

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
		<section className="section">
			<Container className="has-text-centered">
				<h1 className="is-size-1">{state}</h1>
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
							<p className="heading">Active</p>
							<p className="title">{active}</p>
						</div>
					</div>
				</nav>
			</Container>
		</section>
	);
};

export default SingleState;
