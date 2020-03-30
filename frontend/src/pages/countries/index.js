import React, { useState } from 'react';
import SingleCountry from './single-country';
import HistoricalCountry from './historical-country';
import { getCountry, getCountryHistorical } from '../../api';
import { listOfCountries } from '../../util/constants/countries';
import { formatData } from '../../util/chartData';
import Container from '../../components/container';
import DataSelector from '../../components/data-selector';

const Countries = () => {
	const [currentCountry, setCurrentCountry] = useState({});
	const [historicalData, setHistoricalData] = useState({});
	const [statsLoading, setStatsLoading] = useState(false);
	const [historicalLoading, setHistoricalLoading] = useState(false);
	const [networkError, setNetworkError] = useState(false);

	const updateCurrentCountry = async name => {
		setStatsLoading(true);
		setHistoricalLoading(true);
		setNetworkError(false);

		const dataResult = await getCountry(name);
		const historicalResult = await getCountryHistorical(name);

		if (!dataResult || !historicalResult) {
			setStatsLoading(false);
			setNetworkError(true);
			return;
		}

		setCurrentCountry(dataResult.data);
		setStatsLoading(false);

		if (!historicalData) {
			setHistoricalLoading(false);
			setHistoricalData(undefined);
			return;
		}
		setHistoricalData(await formatData(historicalResult.data));
		setHistoricalLoading(false);
	};

	return (
		<>
			<Container>
				<DataSelector
					updateCurrentSelection={updateCurrentCountry}
					list={listOfCountries}
					size="fullwidth"
					isLoading={statsLoading || historicalLoading}
					networkError={networkError}
				/>

				<SingleCountry
					currentCountry={currentCountry}
					isLoading={statsLoading}
					networkError={networkError}
				/>

				<HistoricalCountry
					historicalData={historicalData}
					isLoading={historicalLoading}
					networkError={networkError}
				/>
			</Container>
		</>
	);
};

export default Countries;
