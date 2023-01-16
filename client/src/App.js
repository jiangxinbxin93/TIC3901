import React from "react";
import { Route,Routes } from "react-router-dom";


import Navbar from "./navbar";
import About from "./AboutPage";
import UploadSearch from "./UploadPage";
import Home from "./HomePage";


const App=()=>{
    return(<div><Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/search" element={<UploadSearch/>}/>


    </Routes>


    </div>);
};

export default App;