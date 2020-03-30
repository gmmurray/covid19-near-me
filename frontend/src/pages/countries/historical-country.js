import React from 'react';
import Spinner from '../../components/spinner';
import Container from '../../components/container';
import BarChart from '../../components/charts/bar';
import MobileHistory from './mobile-history';

const HistoricalCountry = props => {
	const { country } = props.historicalData;

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

	if (!country) {
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
				<BarChart chartData={props.historicalData.chartData} />
			</Container>
			<Container className="has-text-centered is-hidden-desktop">
				<MobileHistory data={props.historicalData.mobileData} />
			</Container>
		</section>
	);
};

export default HistoricalCountry;
