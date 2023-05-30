import React, { useState } from 'react';

export const NumberBuilder = () => {
	let [numString, setNumString] = useState('');
	let [count, setCount] = useState(0);

	const setBuilder = () => {
		setCount(++count);
		setNumString((numString += count + ' '));
	};

	return (
		<>
			<button
				onClick={() => {
					setBuilder();
				}}
			>
				Add Number
			</button>
			<button
				onClick={() => {
					setNumString(' ');
					setCount(0);
				}}
			>
				Reset
			</button>
			<p>
				Numbers: <span>{numString}</span>
			</p>
		</>
	);
};
