import React from 'react';
import Spinner from '../../components/spinner';
import Container from '../../components/container';

const MostImpacted = props => {
	const { data } = props;

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
				<h3 className="is-size-3">
					Five countries with the most cases
				</h3>
				<table className="table is-fullwidth is-hoverable">
					<thead>
						<tr>
							<th>#</th>
							<th>Country</th>
							<th>Cases</th>
							<th>Deaths</th>
							<th>Recovered</th>
							<th>Active</th>
							<th>Critical</th>
							<th>Updated</th>
						</tr>
					</thead>
					<tbody>
						{data.map((e, i) => (
							<tr key={i}>
								<th>{i + 1}</th>
								<td>{e.country}</td>
								<td>{e.cases}</td>
								<td>{e.deaths}</td>
								<td>{e.recovered}</td>
								<td>{e.active}</td>
								<td>{e.critical}</td>
								<td>{new Date(e.updated).toDateString()}</td>
							</tr>
						))}
					</tbody>
				</table>
			</Container>
			<Container className="has-text-centered is-hidden-desktop">
				<h3 className="is-size-3">
					Five countries with the most cases
				</h3>
                {data.map((e, i) => (
                    <div className="card" key={i}>
                        <header className="card-header">
                            <p className="card-header-title">{`${i + 1}. ${e.country}`}</p>
                        </header>
                        <div className="card-content">
                            <div className="columns is-mobile">
                                <div className="column is-one-third">{e.cases} Cases</div>
                                <div className="column is-one-third">{e.deaths} Deaths</div>
                                <div className="column is-one-third">{e.recovered} Recovered</div>
                            </div>
                            <div className="columns is-mobile">
                                <div className="column is-half">{e.active} Active</div>
                                <div className="column is-half">{e.critical} Critical</div>
                            </div>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                Updated {new Date(e.updated).toDateString()}
                            </p>
                        </footer>
                    </div>
                ))}
			</Container>
		</section>
	);
};

export default MostImpacted;
