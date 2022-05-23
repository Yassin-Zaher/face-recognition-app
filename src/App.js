import "./App.css";
import React , { Component } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageFormLink from "./components/ImageFormLink/ImageFormLink";
import Rank from "./components/Rank/Rank";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Register from "./components/Register/Register";



const app = new Clarifai.App({
  apiKey: "1f8bfd57f9a3458fbe3e9eef8eb74f66",
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      imageUrl: "",
        box: {},

    };
  }

  calculateFaceLocation = (response) => {
      const faceLocation = response.outputs[0].regions[0].region_info.bounding_box;
      const image = document.getElementById("target-img");
      const width = Number(image.width);
      const height = Number(image.height);
      return {
          leftCol : faceLocation.left_col * width,
          topRow: faceLocation.top_row * height,
          rightCol: width - (faceLocation.right_col * width),
          bottomRow: height - (faceLocation.bottom_row * height)
      }
  }


  displayFaceBox = (box) => {
      this.setState({box: box})
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
          this.state.imageUrl
      )
      .then((response) => {
          console.log(response)
          this.displayFaceBox(this.calculateFaceLocation(response))
      }

      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Navigation />
          <Register />
        <Logo />
        <Rank />
        <ImageFormLink
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
