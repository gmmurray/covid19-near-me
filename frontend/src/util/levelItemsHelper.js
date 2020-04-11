export const createStateItems = data => {
	const { cases, todayCases, deaths, todayDeaths, active } = data;
	return [
		{ name: 'Cases', statistic: cases },
		{ name: 'Cases Today', statistic: todayCases },
		{ name: 'Deaths', statistic: deaths },
		{ name: 'Deaths Today', statistic: todayDeaths },
		{ name: 'Active', statistic: active },
	];
};

export const createCountryItems = data => {
	const {
		cases,
		todayCases,
		deaths,
		todayDeaths,
		recovered,
		active,
		critical,
		casesPerOneMillion,
		deathsPerOneMillion,
	} = data;

	return [
		{ name: 'Cases', statistic: cases },
		{ name: 'Cases Today', statistic: todayCases },
		{ name: 'Deaths', statistic: deaths },
		{ name: 'Deaths Today', statistic: todayDeaths },
		{ name: 'Recovered', statistic: recovered },
		{ name: 'Active', statistic: active },
		{ name: 'Critical', statistic: critical },
		{ name: 'Cases/Million', statistic: casesPerOneMillion },
		{ name: 'Deaths/Million', statistic: deathsPerOneMillion },
	];
};

export const createWorldItems = data => {
	const { cases, deaths, recovered, active } = data;

	return [
		{ name: 'Cases', statistic: cases },
		{ name: 'Deaths', statistic: deaths },
		{ name: 'Recovered', statistic: recovered },
		{ name: 'Active', statistic: active },
	];
};
