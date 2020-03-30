export const formatData = data => {
	const country = data.country;
	const cases = [];
	const deaths = [];
	Object.keys(data.timeline.cases).map(element => {
		cases.push({
			x: element,
			y: data.timeline.cases[element],
		});
	});
	Object.keys(data.timeline.deaths).map(element => {
		deaths.push({
			x: element,
			y: data.timeline.deaths[element],
		});
	});

	const casesTrimmed = [];
	const deathsTrimmed = [];
	for (let i = 0; i < cases.length; i++) {
		if (Number.parseInt(cases[i].y) !== 0) {
			casesTrimmed.push(cases[i]);
			deathsTrimmed.push(deaths[i]);
		} else {
			if (casesTrimmed.length === 0) {
				casesTrimmed.push(cases[i]);
				deathsTrimmed.push(deaths[i]);
			}
		}
	}

	const lastEightDays = {
		cases: cases.slice(cases.length - 8),
		deaths: deaths.slice(deaths.length - 8),
	};

	const mobileData = [];
	for (let i = 0; i < 7; i++) {
		mobileData.push({
			date: lastEightDays.cases[i + 1].x,
			cases: lastEightDays.cases[i + 1].y - lastEightDays.cases[i].y,
			deaths: lastEightDays.deaths[i + 1].y - lastEightDays.deaths[i].y,
		});
	}

	return {
		country,
		chartData: [
			{
				label: 'Cases',
				data: casesTrimmed,
			},
			{
				label: 'Deaths',
				data: deathsTrimmed,
			},
		],
		mobileData,
	};
};
