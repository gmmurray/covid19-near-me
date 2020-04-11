import React, { useState } from 'react';
import { getOverviewData } from '../../api';
import OverviewDisplay from './overviewDisplay';
import Container from '../../components/container';
import DataSelector from '../../components/data-selector';
import { listOfStates } from '../../util/constants/states';
import Spinner from '../../components/spinner';

const Overiew = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [networkError, setNetworkError] = useState(false);

	const updateOverviewData = async state => {
		setIsLoading(true);
		setNetworkError(false);

		const result = await getOverviewData(state);

		if (!result) {
			setIsLoading(false);
			setNetworkError(true);
			return;
		}

		setData(result.data);
		setIsLoading(false);
	};

	const renderOverviewData = () => {
		if (networkError) {
			return (
				<section className="section">
					<Container className="has-text-centered">
						<h1 className="is-size-3">
							Sorry, we encountered an error while trying to
							connect. Select a state to try again.
						</h1>
					</Container>
				</section>
			);
		} else if (isLoading) {
			return (
				<section className="section">
					<Container className="has-text-centered">
						<Spinner />
					</Container>
				</section>
			);
		} else if (!data.state) {
			return (
				<section className="section">
					<Container className="has-text-centered">
						<h1 className="is-size-1">Select a state</h1>
					</Container>
				</section>
			);
		} else {
			return <OverviewDisplay data={data} />;
		}
	};
	return (
		<>
			<Container>
				<DataSelector
					updateCurrentSelection={updateOverviewData}
					list={listOfStates}
					size={'fullwidth'}
					isLoading={isLoading}
				/>
				{renderOverviewData()}
			</Container>
		</>
	);
};

export default Overiew;
