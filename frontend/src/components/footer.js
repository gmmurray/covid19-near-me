import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="content has-text-centered">
				<p>
					<strong>Frontend and backend built by </strong>
					<a
						href="https://github.com/gmmurray"
						target="_blank"
						rel="noopener noreferrer"
					>
						Greg Murray
					</a>
				</p>
				<p>
					<strong>COVID-19 data acquired via API provided by </strong>
					<a
						href="https://github.com/NovelCOVID/API"
						target="_blank"
						rel="noopener noreferrer"
					>
						the NovelCOVID API GitHub Project
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
