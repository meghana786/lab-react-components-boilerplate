import React from 'react';
import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import Body from './components/Body'; 

const imageData = [
    { id: 1, img: lake },
    { id: 2, img: lake },
    { id: 3, img: lake },
    { id: 4, img: lake }
];

function App() {
    return (
        <div>
            <Header />
            <Body imageData={imageData} /> 
            <GallaryFooter />
        </div>
    );
}

export default App;
