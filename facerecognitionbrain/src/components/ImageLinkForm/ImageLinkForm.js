// IMPORTS
	// General
	  	import './ImageLinkForm.css';

	// Libraries  
		import React from 'react';


const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'This Magic Brain will detect Faces in your Picutures. Give it a Try!'}
			</p>
			<div className="center">
				<div className="form pa4 br3 shadow-5 center">
					<input  className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onPictureSubmit}>Detect</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm; 