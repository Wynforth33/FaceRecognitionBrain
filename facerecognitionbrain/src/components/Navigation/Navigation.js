import React from 'react';

const Navigation = ({ onRouteChange, page }) => {
	let routeChange, buttonValue;
	switch (page) {
		case 'signin':
			routeChange = 'register';
			buttonValue = 'Register';
			break;

		case 'register':
			routeChange = 'signin';
			buttonValue = 'Sign In';
			break;

		case 'home':
			routeChange = 'signin';
			buttonValue = 'Sign Out';
			break;

		default:
			routeChange = 'signin';
			buttonValue = 'Sign In';
			break;
	}

	return (
		<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
			<p onClick={() => onRouteChange(routeChange)} className="f3 link dim black underline pa3 pointer">{buttonValue}</p>
		</nav>
	)	
}

export default Navigation; 