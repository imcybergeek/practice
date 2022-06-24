import React, { useState } from 'react';

const EventDiv = () => {
const [state, setState] = useState('');
	
const handler = (event) => {
	// changing the state to the name of the key
	// which is pressed
	setState(event.key);
};
	
return (
	<div onKeyPress={(e) => handler(e)}>
	<h1>Hi Geeks!</h1>
		
<p>Key pressed is: {state}</p>

		
	{/* Passing the key pressed to the handler function */}
		
	</div>
);
};

export default EventDiv;
