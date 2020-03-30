import React from 'react';
import Spinner from '../../components/spinner';
import Container from '../../components/container';
import BarChart from '../../components/charts/bar';
import MobileHistory from './mobile-history';

const HistoricalCountry = props => {
	const { country, timeline, chartData, mobileData } = props.historicalData;

	if (props.networkError) {
		return <></>;
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

	if (!country || !timeline.cases) {
		return (
			<section className="section">
				<Container className="has-text-centered">
					<></>
				</Container>
			</section>
		);
	}

	return (
		<section className="section">
			<Container className="has-text-centered is-hidden-touch">
				<BarChart chartData={chartData} />
			</Container>
			<Container className="has-text-centered is-hidden-desktop">
				<MobileHistory data={mobileData} />
			</Container>
		</section>
	);
};

export default HistoricalCountry;
