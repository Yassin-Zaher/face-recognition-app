import React from 'react';
import "./Register.css"

function Register(props) {
    return (
        <div className="form">
            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your account!</div>
            <div className="input-container ic1">
                <label htmlFor="firstname" className="placeholder">First name</label>
                <input id="firstname" className="input" type="text" placeholder=" "/>

            </div>
            <div className="input-container ic2">
                <label htmlFor="lastname" className="placeholder">Last name</label>
                <input id="lastname" className="input" type="text" placeholder=" "/>
            </div>
            <div className="input-container ic2">
                <label htmlFor="email" className="placeholder">Email</label>
                <input id="email" className="input" type="text" placeholder=" "/>
            </div>
            <button type="text" className="submit">submit</button>
        </div>
    );
}

export default Register;