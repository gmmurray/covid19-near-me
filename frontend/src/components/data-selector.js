import React, { useState } from 'react';

const DataSelector = props => {
	const { size } = props;
	const size_cn = size ? `is-${size}` : '';
	const select_container_cn = `select ${size_cn}`.trim();

	const [selection, setSelection] = useState('');
	const [error, setError] = useState('');

	const handleChange = e => {
		if (e.target.value) {
			setError('');
		}
		setSelection(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (selection) props.updateCurrentSelection(selection);
		else setError('Please select an option');
	};

	return (
		<section className="section">
			<div className="has-text-centered">
				<form onSubmit={handleSubmit}>
					<div className="field has-addons">
						<div className="control is-expanded">
							<div
								className={
									error
										? `${select_container_cn} is-danger`
										: select_container_cn
								}
							>
								<select
									value={selection}
									onChange={handleChange}
								>
									<option value="">Select...</option>
									{props.list.map((element, index) => (
										<option key={index}>{element}</option>
									))}
								</select>
							</div>
						</div>
						<div className="control">
							<button className="button is-success" type="submit" disabled={props.isLoading}>
								Get Data
							</button>
						</div>
					</div>
					<span className="has-text-danger">{error}</span>
				</form>
			</div>
		</section>
	);
};

export default DataSelector;
