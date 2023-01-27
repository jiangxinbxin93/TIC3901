import React from "react";
import { Link } from 'react-router-dom';
import "./UploadSection.css";
import WHO from "../../images/who.jpg";
import Unknown_1 from "../../images/image1.jpg";
import Unknown_2 from "../../images/image2.jpg";
import Unknown_3 from "../../images/image3.jpg";
import Unknown_4 from "../../images/image4.jpg";

function UploadSection() {
  return (
    <div className="UploadSection" >
      <Link to='./search'>
      <ul className="Outer_layer">
        <li>
          <ul className="Inner_layer">
            <li>
              <img src={Unknown_1} alt=""></img>
              <img src={Unknown_2} alt=""></img>
            </li>
            <li>
              <img src={Unknown_3} alt=""></img>
              <img src={Unknown_4} alt=""></img>
            </li>
          </ul>
        </li>
        <li>
          <img src={WHO} alt=""></img>
        </li>
      </ul>
      </Link>
    </div>
  );
}

export default UploadSection;
