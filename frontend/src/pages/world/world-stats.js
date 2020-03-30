import React from 'react';
import Spinner from '../../components/spinner';
import Container from '../../components/container';

const WorldStats = props => {
	const { cases, deaths, recovered, active, updated } = props.data;

	const updatedDate = new Date(updated);

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

	return (
		<section className="section">
			<Container className="has-text-centered">
				<h1 className="is-size-1">Worldwide Stats</h1>
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
							<p className="heading">Deaths</p>
							<p className="title">{deaths}</p>
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
							<p className="heading">Recovered</p>
							<p className="title">{recovered}</p>
						</div>
					</div>
				</nav>
			</Container>
		</section>
	);
};

export default WorldStats;
