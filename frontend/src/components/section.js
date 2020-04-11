import React from 'react';
import Container from './container';

const Section = (props) => {
	const { withContainer } = props;

	if (withContainer) {
		return (
			<section className="section">
				<Container className="has-text-centered">
					{props.children}
				</Container>
			</section>
		);
	} else return <section className="section">{props.children}</section>;
};

export default Section;
