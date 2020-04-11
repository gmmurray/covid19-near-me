import React from 'react';
import Section from './section';

const Level = (props) => {
    const { title, subtitle, items, titleSize } = props;
    const title_cn = titleSize ? `is-size-${titleSize}` : 'is-size-1';
	return (
		<Section withContainer>
			{title ? <h1 className={title_cn}>{title}</h1> : ''}
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
