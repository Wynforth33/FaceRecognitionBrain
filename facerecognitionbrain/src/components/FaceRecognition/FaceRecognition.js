// IMPORTS
	// General
		import './FaceRecognition.css';

	// Libraries	
		import React from 'react';

const FaceRecognition = ({ imageUrl, boxes }) => {
	if (boxes) {
		return (
			<div className="center ma" id="imageBox">
				<div className='absolute mt2'>
					<img id="inputImage" src={ imageUrl } alt="" width='500px' height='auto' />
					{	
						boxes.map( (box, i) => {
							return <div key={i} className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
						})	
					}
				</div>
			</div>
		)
	} else {
		return (
			<div className="center ma" id="imageBox">
				<div className='absolute mt2'>
					<img id="inputImage" src={ imageUrl } alt="" width='500px' height='auto' />
				</div>
			</div>
		)
	}
}

export default FaceRecognition; 