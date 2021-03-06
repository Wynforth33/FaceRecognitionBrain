// IMPORTS
	// General
		import './Logo.css';

	// Libraries
		import React from 'react';
		import Tilt from 'react-tilt'; 

	// Images
		import brain from './brain_100.png';

const Logo = () => {
	return (
		<div className=' ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner pa3"> 
					<img style={{ paddingTop: '7px' }}src={brain} alt="logo" />
				</div>
			</Tilt>
		</div>
	)
}

export default Logo; 


 
