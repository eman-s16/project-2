import React, { useState, useEffect } from 'react';

const Timer = ({ name }) => {
	const [ seconds, setSeconds ] = useState('60');
	const [ isCounrdownRunning, setisCounrdownRunning ] = useState(false);
	const [ shouldAlart, setshouldAlart ] = useState(false);
	console.log('timer', seconds);
	useEffect(
		() => {
			const secondsLeft = parseInt(seconds);
			if (isCounrdownRunning && secondsLeft > 0) {
				setTimeout(() => {
					setSeconds(secondsLeft - 1);
				}, 1000);
			} else {
				if (shouldAlart) {
					alert(`The Countdown is over for the Timer "${name}"`);
					setshouldAlart(false);
				}
				setisCounrdownRunning(false);
			}
		},
		[ isCounrdownRunning, seconds ]
	);
	return (
		<div className="Timer">
			This is a {name}
			<input
				disabled={isCounrdownRunning}
				type="number"
				value={seconds}
				onChange={(event) => {
					setSeconds(event.target.value);
				}}
			/>
			<button
				onClick={() => {
					setisCounrdownRunning(true);
					setshouldAlart(true);
				}}
			>
				start countdown
			</button>
		</div>
	);
};

export default Timer;
