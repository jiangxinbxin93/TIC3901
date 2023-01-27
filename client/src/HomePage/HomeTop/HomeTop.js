import React from "react";
import "./HomeTop.css";
import Kathakali from "../../images/kathakali-home.jpg";


function HomeTop() {
  return (
    <div className="HomeTop">

      <img src={Kathakali}  alt=""></img>
      <button className="btn get_started" type="button">GET STARTED</button>
      <button className="btn discover" type="button" to="/about">DISCOVER KATHAKALI</button>
     </div> 
    
  );
}

export default HomeTop;
