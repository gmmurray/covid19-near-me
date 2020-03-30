import React, { useState, useEffect } from 'react';
import { getWorldStats, getWorldMostImpacted } from '../../api';

import Container from '../../components/container';
import WorldStats from './world-stats';
import MostImpacted from './most-impacted';

const World = () => {
	const [worldStats, setWorldStats] = useState({});
	const [mostImpacted, setMostImpacted] = useState([]);
	const [statsLoading, setStatsLoading] = useState(false);
	const [impactedLoading, setImpactedLoading] = useState(false);
	const [networkError, setNetworkError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			setStatsLoading(true);
			const result = await getWorldStats();
			if (!result) {
				setStatsLoading(false);
				setNetworkError(true);
				return;
			}
			setWorldStats(result.data);
			setStatsLoading(false);
		};
		const getMostImpacted = async () => {
			setImpactedLoading(true);
			const result = await getWorldMostImpacted();
			if (!result) {
				setStatsLoading(false);
				setNetworkError(true);
				return;
			}
			setMostImpacted(result.data);
			setImpactedLoading(false);
		};
		getData();
		getMostImpacted();
	}, []);

	const refreshData = async () => {
		setStatsLoading(true);
		setImpactedLoading(true);
		setNetworkError(false);

		const statsResult = await getWorldStats();
		const impactedResult = await getWorldMostImpacted();

		if (!statsResult || !impactedResult) {
			setStatsLoading(false);
			setNetworkError(true);
			return;
		}

		setWorldStats(statsResult.data);
		setStatsLoading(false);
		setMostImpacted(impactedResult.data);
		setImpactedLoading(false);
	};

	return (
		<>
			<Container>
				<section className="section">
					<Container className="has-text-centered">
						<button
							onClick={refreshData}
                            className="button is-success"
                            disabled={statsLoading || impactedLoading}
						>
							Refresh Data
						</button>
					</Container>
				</section>
			</Container>
			<Container>
				<WorldStats
					data={worldStats}
					isLoading={statsLoading}
					networkError={networkError}
				/>
			</Container>
			<Container>
				<MostImpacted
					data={mostImpacted}
					isLoading={impactedLoading}
					networkError={networkError}
				/>
			</Container>
		</>
	);
};

export default World;
