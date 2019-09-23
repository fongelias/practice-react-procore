import React, {useState} from 'react';

export const useDropdown = (label, defaultState, options) => {
	const [state, setState] = useState(defaultState);
	const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
	const Dropdown = () => (
		<label htmlFor={label}>
			{label}
			<select
				id={id}
				value={state}
				onChange={e => setState(e.target.value)}
				onBlur={e => setState(e.target.value)}>
				<option>All</option>
				{options.map((option, i) => <option value={option} key={i}>{option}</option>)}
			</select>
		</label>
	);

	return [state, Dropdown, setState];
}