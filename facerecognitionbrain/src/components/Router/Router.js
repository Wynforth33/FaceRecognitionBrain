// IMPORTS
  // Libraries
    import React from 'react';

  // Components
    import SignIn from '../SignIn/SignIn';
    import Register from '../Register/Register';
    import Home from '../Home/Home';

const Router = ({ route, onInputChange, onButtonSubmit, imageUrl, boxes, onRouteChange }) => {
  switch (route) {
    case 'signin':
      return <SignIn onRouteChange={onRouteChange}/>
    
    case 'register':
      return <Register onRouteChange={onRouteChange}/>

    case 'home':
      return <Home 
                      onInputChange={onInputChange} 
                      onButtonSubmit={onButtonSubmit}
                      imageUrl={imageUrl} 
                      boxes={boxes} 
                  />
    default:
      return <SignIn onRouteChange={onRouteChange}/>
  }
}

export default Router; 