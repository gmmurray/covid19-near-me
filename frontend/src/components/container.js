import React from 'react';

const Container = props => {
	const { fluid, widescreen, fullhd, className } = props;
	const fluid_cn = fluid ? `is-fluid` : '';
	const widescreen_cn = widescreen && !fullhd ? `is-widescreen` : '';
	const fullhd_cn = fullhd && !widescreen ? `is-fullhd` : '';
	const additionalClasses = className ? className : '';
	const combinedClasses = `container ${fluid_cn} ${widescreen_cn} ${fullhd_cn} ${additionalClasses}`.trim();

	return <div className={combinedClasses}>{props.children}</div>;
};

export default Container;
