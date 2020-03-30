import React from 'react';
import Spinner from '../../components/spinner';
import Container from '../../components/container';
import BarChart from '../../components/charts/bar';
import MobileHistory from './mobile-history';

const HistoricalCountry = props => {
	const { chartData, mobileData } = props.historicalData;
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

	return (
		<section className="section">
			<Container className="has-text-centered is-hidden-touch">
				{props.historicalData.chartData ? (
					<BarChart chartData={chartData} />
				) : (
					<></>
				)}
			</Container>
			<Container className="has-text-centered is-hidden-desktop">
				{props.historicalData.mobileData ? (
					<MobileHistory data={mobileData} />
				) : (
					<></>
				)}
			</Container>
		</section>
	);

	// if () {
	// 	return (
	// 		<section className="section">
	// 			<Container className="has-text-centered">
	// 				<></>
	// 			</Container>
	// 		</section>
	// 	);
	// }
};

export default HistoricalCountry;
