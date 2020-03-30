import React, { useMemo, useState, useCallback } from 'react';
import { Chart } from 'react-charts';

import './styles.scss';

const BarChart = props => {
	const [{ primaryCursorValue, secondaryCursorValue }, setState] = useState({
		primaryCursorValue: null,
		secondaryCursorValue: null,
	});

	const data = useMemo(() => props.chartData);
	const series = useMemo(
		() => ({
			type: 'bar',
		}),
		[],
	);
	const axes = useMemo(
		() => [
			{ primary: true, type: 'ordinal', position: 'bottom' },
			{ position: 'left', type: 'linear', stacked: false },
		],
		[],
	);

	const primaryCursor = React.useMemo(
		() => ({
			value: primaryCursorValue,
		}),
		[primaryCursorValue],
	);

	const secondaryCursor = React.useMemo(
		() => ({
			value: secondaryCursorValue,
		}),
		[secondaryCursorValue],
	);

	const onFocus = useCallback(datum => {
		setState({
			primaryCursorValue: datum ? datum.primary : null,
			secondaryCursorValue: datum ? datum.secondary : null,
		});
	}, []);

	return (
		<div
			style={{
				width: '100%',
				height: '500px',
			}}
		>
			<Chart
				data={data}
				axes={axes}
				series={series}
				tooltip
				onFocus={onFocus}
				primaryCursor={primaryCursor}
				secondaryCursor={secondaryCursor}
			/>
		</div>
	);
};

export default BarChart;
