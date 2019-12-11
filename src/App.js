import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

class App extends React.Component {
  state = { input: '' };

  onInputChange = e => {
    console.log(e.target.value);
  };

  onButtonSubmit = () => {
    console.log('click');
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Rank />
        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/*<FaceRecognition />} */}
      </div>
    );
  }
}

export default App;

// Clarifai.FACE_DETECT_MODEL
// URL: https://samples.clarifai.com/metro-north.jpg
