import React from 'react';
import Section from './section';

const Level = (props) => {
	const { title, subtitle, items } = props;
	return (
		<Section withContainer>
			<h1 className="is-size-1">{title}</h1>
			{subtitle ? <h5 className="subtitle is-5">{subtitle}</h5> : ''}
			<nav className="level">
				{items.map((element, index) => (
					<div className="level-item has-text-centered" key={index}>
						<div>
							<p className="heading">{element.name}</p>
							<p className="title">{element.statistic}</p>
						</div>
					</div>
				))}
			</nav>
		</Section>
	);
};

export default Level;
