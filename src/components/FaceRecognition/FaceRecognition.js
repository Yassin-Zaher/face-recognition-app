import React from 'react';

function FaceRecognition({imageUrl, box}) {
    return (
        <div className="img-container">
            <img id="target-img" width="500px" height="auto" src={imageUrl} alt="target-face"/>
            <div className="bounding-box"
                 style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

            </div>
        </div>
    );
}

export default FaceRecognition;