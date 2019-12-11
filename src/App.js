import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Rank />
      <Logo />
      <ImageLinkForm />
      {/*<FaceRecognition />} */}
    </div>
  );
}

export default App;

// Clarifai.FACE_DETECT_MODEL
// URL: https://samples.clarifai.com/metro-north.jpg
