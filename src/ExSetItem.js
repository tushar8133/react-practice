import React, { useState } from 'react';

export function ExSetItem() {
	// setItem as VALUE
	const [username, setUsername] = useState('default');
	const updateUsername = (e) => {
		setUsername(e.target.value);
	};

	// setItem as FUNCTION
	const [quantity, setQuantity] = useState(0);
	const updateQuantity = (operator) => {
		setQuantity((previousState) => {
			return previousState + parseInt(operator);
		});
	};

	return (
		<React.Fragment>
			<fieldset>
				<legend>setItem as VALUE</legend>
				<input
					placeholder="Username"
					value={username}
					onInput={updateUsername}
				/>
				({username})
			</fieldset>

			<fieldset>
				<legend>setItem as FUNCTION</legend>
				<button onClick={updateQuantity.bind(this, '-1')}>-</button>
				<code>({quantity})</code>
				<button onClick={updateQuantity.bind(this, '+1')}>+</button>
			</fieldset>
		</React.Fragment>
	);
}
