import React from 'react';
import '../App.css';

function Body({ imageData }) {
    return (
        <div className="image-gallery">
            {imageData.map(image => (
                <div key={image.id} className="column">
                    <img src={image.img} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Body;
