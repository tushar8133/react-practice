import React, { useState, useRef } from 'react';

export function ExUseRef() {
	// useRef
	const [email, setEmail] = useState('abc@xyz.com');
	const emailRef = useRef(email);
	const updateEmail = (e) => {
		emailRef.current = e.target.value;
		// setEmail(e.target.value);
	};

	return (
		<React.Fragment>
			<fieldset>
				<legend>useRef</legend>
				<input
					placeholder="Email"
					value={emailRef.current}
					onChange={updateEmail}
					ref={emailRef}
				/>
				({email}) ({emailRef.current})
			</fieldset>
		</React.Fragment>
	);
}
