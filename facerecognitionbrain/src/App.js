// IMPORTS
  // General
    import './App.css'

  // Libraries
    import React, { Component } from 'react';
    import Particles from 'react-particles-js';
    import Clarifai from 'clarifai';

  // Components
    import Navigation from './components/Navigation/Navigation';
    import Router from './components/Router/Router';
   

// CONSTANTS 
  // Clarifai
    const CLARIFAI_API_KEY =  '9757d9678aa54eaba2b6b66e46337e45';
    const app = new Clarifai.App({
      apiKey: CLARIFAI_API_KEY
    });

  // Particles.js  
    const PARTICLE_OPTIONS = {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        }
      }
    } 

// TEST IMAGES
  // MultiFaces - https://cdn.vox-cdn.com/thumbor/nGPSsrE8JN02dHh067eNwe4_CL0=/0x0:3049x2048/620x413/filters:focal(1333x1562:1819x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63058104/fake_ai_faces.0.png
  // SingleFace - https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-450w-613759379.jpg
  // NoFace - https://fd204d43461da5218393-0b3ca8ff9ad90f3780bc876f4d2d02ae.ssl.cf1.rackcdn.com/uploads/2018/07/AV_Landscape-Hero-Contour-2993-1276x800.jpg

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      boxes: [],
      route: 'signin'
    }
  }

  calculateFaceLocation = (data) => {
      const image = document.getElementById('inputImage');
      const width = Number(image.width);
      const height = Number(image.height);
      const faceData = data.outputs[0].data.regions; // Will be an Array of Faces regardless of number of faces; No Face will return Undefined. 

      // Check if Data Received if not returns False
      if (!faceData) {
        return false; 
      }

      // Extracts Bounding Box Regions Data from Response Data
      const faceRegions = faceData.map( face => face.region_info.bounding_box )

      // Calculates Bounding Box Dimensions Relative to Image
      const boxes = faceRegions.map( face => {
         return {
          leftCol: face.left_col * width,
          topRow: face.top_row * height,
          rightCol: width - (face.right_col * width),
          bottomRow: height - (face.bottom_row * height)
        }
      })

      return boxes;
  }

  displayFaceBox = (boxes) => {
    // Checks if Box Data Exists; if not Returns False
    if (boxes) {
      this.setState({boxes: boxes});
    } else {
      this.setState({boxes: false});
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models
      .predict(
          Clarifai.FACE_DETECT_MODEL, 
          this.state.input)
      .then( response => this.displayFaceBox( this.calculateFaceLocation(response) )
      .catch( err => console.log("Oops", err)));
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
    return  (
      <div className="App">
        <Particles 
            className='particles'
            params={PARTICLE_OPTIONS}
        />
        <Navigation onRouteChange={this.onRouteChange} page={this.state.route} />
        <Router 
                route={this.state.route}
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}
                imageUrl={this.state.imageUrl} 
                boxes={this.state.boxes}
                onRouteChange={this.onRouteChange}
            />
      </div>
    );
  }
}

export default App;
