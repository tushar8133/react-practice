import React from 'react';
import { ExUseState } from './ExUseState';
import { ExSetItem } from './ExSetItem';
import { ExUseRef } from './ExUseRef';
import { ExUseEffect } from './ExUseEffect';

export default function App() {
	return (
		<React.Fragment>
			<ExUseState />
			<ExSetItem />
			<ExUseRef />
			<ExUseEffect />
		</React.Fragment>
	);
}
