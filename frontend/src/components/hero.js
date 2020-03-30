import React from 'react';

const Hero = props => {
	const { title, subtitle, color, size, gradient } = props;
	const color_cn = color ? `is-${color}` : '';
	const size_cn = size ? `is-${size}` : '';
	const gradient_cn = gradient ? 'is-bold' : '';
	const combinedClasses = `hero ${color_cn} ${size_cn} ${gradient_cn}`.trim();

	return (
		<section className={combinedClasses}>
			<div className="hero-body">
				<div className="container">
					<h1 className="title">{title}</h1>
					<h2 className="subtitle">{subtitle}</h2>
				</div>
			</div>
		</section>
	);
};

export default Hero;
