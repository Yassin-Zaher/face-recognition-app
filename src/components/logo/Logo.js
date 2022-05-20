import React from 'react';
import Tilt from "react-tilt/dist/tilt";
import "./Logo.css";
import bulb from "./bulb.png"
function Logo(props) {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 152 }} >
                <div className="Tilt-inner pa3"><img src={bulb} alt="Logo"/> </div>
            </Tilt>
        </div>
    );
}

export default Logo;