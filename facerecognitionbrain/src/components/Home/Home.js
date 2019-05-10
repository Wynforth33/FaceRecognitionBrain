// IMPORTS
  // Libraries
    import React from 'react';

  // Components
	import Rank from '../Rank/Rank';
	import Logo from '../Logo/Logo';
	import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
	import FaceRecognition from '../FaceRecognition/FaceRecognition';

const Home = ({ onInputChange, onPictureSubmit, imageUrl, boxes, user }) => {
	return (
		<div>
            <Logo />
            <Rank user={user} />
            <ImageLinkForm 
                onInputChange={onInputChange} 
                onPictureSubmit={onPictureSubmit} 
            />
            <FaceRecognition 
                imageUrl={imageUrl} 
                boxes={boxes} 
            />
          </div>
	)
}

export default Home; 	