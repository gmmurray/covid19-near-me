import React from 'react';

const MobileHistory = props => {
	return (
		<>
			<h3 className="is-size-3">7 Day Summary</h3>
			<ul>
				{props.data.map((element, i) => (
					<li key={i}>
						<strong>{element.date}</strong>
						<ul key={i}>
							{element.cases > 0 ? (
								<li key={`${i}-cases}`}>
									<span className="has-text-danger">
										+{element.cases} Cases
									</span>
								</li>
							) : (
								<li key={`${i}-cases}`}>
									<span className="has-text-success">
										{element.cases} Cases
									</span>
								</li>
							)}
							{element.deaths > 0 ? (
								<li key={`${i}-deaths}`}>
									<span className="has-text-danger">
										+{element.deaths} Deaths
									</span>
								</li>
							) : (
								<li key={`${i}-deaths}`}>
									<span className="has-text-success">
										{element.deaths} Deaths
									</span>
								</li>
							)}
						</ul>
						<hr />
					</li>
				))}
			</ul>
		</>
	);
};

export default MobileHistory;
