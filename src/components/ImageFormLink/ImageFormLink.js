import React from 'react';
import './imageFormLink.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='main-p'>
                This Magic Brain will detect faces in your pictures. Git it a try.
            </p>
            <div className='center'>
                <div className='form'>
                    <input className='img-input' type='tex' onChange={onInputChange}/>
                    <button
                        className='btn-detect'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;