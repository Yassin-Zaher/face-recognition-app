import './App.css';
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageFormLink from "./components/ImageFormLink/ImageFormLink";
import Rank from "./components/Rank/Rank";
import {Component} from "react";
import Clarifai from 'clarifai';
import logo from "./components/logo/Logo";


const app = new Clarifai.App({  apiKey: "1f8bfd57f9a3458fbe3e9eef8eb74f66",})
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }
    onInputChange(e) {
        console.log(e.target.value)
    }


    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input});
        app.models
            .predict(
                Clarifai.FACE_DETECT_MODEL, "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
            )
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }



    render(){
        return (
            <div className="App">
                <Navigation />
                <Logo />
                <Rank />
                <ImageFormLink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>

            </div>
        );
    }

}

export default App;
