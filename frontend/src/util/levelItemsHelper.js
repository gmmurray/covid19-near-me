export const createStateItems = data => {
	const { cases, todayCases, deaths, todayDeaths, active, tests } = data;
	return [
		{ name: 'Cases', statistic: cases },
		{ name: 'Cases Today', statistic: todayCases },
		{ name: 'Deaths', statistic: deaths },
		{ name: 'Deaths Today', statistic: todayDeaths },
		{ name: 'Active', statistic: active },
		{ name: 'Tests', statistic: tests },
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
		tests,
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
		{ name: 'Tests', statistic: tests },
		{ name: 'Cases/Million', statistic: casesPerOneMillion },
		{ name: 'Deaths/Million', statistic: deathsPerOneMillion },
	];
};

export const createWorldItems = data => {
	const { cases, deaths, recovered, active, tests, affectedCountries } = data;

	return [
		{ name: 'Cases', statistic: cases },
		{ name: 'Deaths', statistic: deaths },
		{ name: 'Recovered', statistic: recovered },
		{ name: 'Active', statistic: active },
		{ name: 'Tests', statistic: tests },
		{ name: 'Affected Countries', statistic: affectedCountries },
	];
};
