// IMPORTS
  // Libraries
    import React from 'react';

  // Components
    import SignIn from '../SignIn/SignIn';
    import Register from '../Register/Register';
    import Home from '../Home/Home';

const Router = ({ route, onInputChange, onPictureSubmit, imageUrl, boxes, onRouteChange, loadUser, user }) => {
  switch (route) {
    case 'signin':
      return <SignIn 
                      onRouteChange={onRouteChange}
                      loadUser={loadUser}
                  />
    
    case 'register':
      return <Register 
                      onRouteChange={onRouteChange}
                      loadUser={loadUser}
                  />

    case 'home':
      return <Home 
                      onInputChange={onInputChange} 
                      onPictureSubmit={onPictureSubmit}
                      imageUrl={imageUrl} 
                      boxes={boxes}
                      user={user}
                  />
    default:
      return;
  }
}

export default Router; 