// IMPORTS
  // Libraries
    import React from 'react';

  // Components
	import Rank from '../Rank/Rank';
	import Logo from '../Logo/Logo';
	import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
	import FaceRecognition from '../FaceRecognition/FaceRecognition';

const Home = ({ onInputChange, onButtonSubmit, imageUrl, boxes }) => {
	return (
		<div>
            <Logo />
            <Rank />
            <ImageLinkForm 
                onInputChange={onInputChange} 
                onButtonSubmit={onButtonSubmit} 
            />
            <FaceRecognition 
                imageUrl={imageUrl} 
                boxes={boxes} 
            />
          </div>
	)
}

export default Home; 	