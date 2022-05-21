import React from 'react';
import Tilt from "react-tilt/dist/tilt";
import "./Logo.css";
import bulb from "./bulb.png"
function Logo(props) {
    return (
        <div className="logo-c">
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 152 }} >
                <div className="Tilt-inner"><img src={bulb} alt="Logo"/> </div>
            </Tilt>
        </div>
    );
}

export default Logo;