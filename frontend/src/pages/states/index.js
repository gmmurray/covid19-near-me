import React, { useState } from 'react';
import { getState } from '../../api';
import { listOfStates } from '../../util/constants/states';
import SingleState from './single-state';

import Container from '../../components/container';
import DataSelector from '../../components/data-selector';

const States = () => {
	const [currentState, setCurrentState] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [networkError, setNetworkError] = useState(false);

	const updateCurrentState = async name => {
		setIsLoading(true);
		setNetworkError(false);

		const result = await getState(name);

		if (!result) {
			setIsLoading(false);
			setNetworkError(true);
			return;
		}

		setCurrentState(result.data);
		setIsLoading(false);
	};

	return (
		<>
			<Container>
				<DataSelector
					updateCurrentSelection={updateCurrentState}
					list={listOfStates}
					size={'fullwidth'}
					isLoading={isLoading}
				/>

				<SingleState
					currentState={currentState}
					isLoading={isLoading}
					networkError={networkError}
				/>
			</Container>
		</>
	);
};

export default States;
