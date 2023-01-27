import React from "react";
import { useState } from "react";
import axios from "axios";

import "./upload.css";
import UploadSign from "../../images/upload-file.png";
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>;

function Upload() {
  var [photo, setPhoto] = useState({
    name: "",
    img: { data: "" },
  });

  function selectImage() {
    const inputFile = document.querySelector("#file");
    inputFile.click();
  }
  function handleImage(e) {
    //store image and set to photo
    const image = e.target.files[0];
    setPhoto(image);
    console.log(image);
    
    //select img-area in CSS
    const imgArea = document.querySelector(".img-area");

    //access to the file content uploaded
    const reader = new FileReader();
    reader.onload = function (event) {

      //select img in CSS
      const allImg = imgArea.querySelectorAll("img");
      
      //remove existing images
      allImg.forEach((item) => item.remove());

      //save image information
      const dataUrl = event.target.result;
      
      //create an image element
      const img = document.createElement("img");
      img.src = dataUrl;

      imgArea.appendChild(img);

      //set img-area.active in CSS
      imgArea.classList.add("active");

      //Display image name on imgArea using CSS
      imgArea.dataset.img = image.name;
    
    };
    //Display image
    
    reader.readAsDataURL(image);
  }

  async function onSearch() {
    
    //Create image storage structure
    const formData = new FormData();
    //assign name and Image data. 
    formData.append("name", photo.name);
    formData.append("Image", photo);

    //Image structure data pass to server to upload to MongoDB
    axios.post("http://localhost:5000/upload", formData, {}).then((res) => {
      console.log(res);
    });

    
  }

  return (
    <div className="upload-page">
      <div className="container">
        <input
          type="file"
          id="file"
          accept="image/*"
          onChange={handleImage}
          hidden
        ></input>
        <div className="img-area" data-img="">
          <box-icon type="solid" name="cloud-upload" size="lg"></box-icon>
          <div className="upload-icon">
            <img src={UploadSign} alt=""></img>
          </div>
          <h3>Upload Image</h3>
          <p>
            Choose only <span>Image</span> file
          </p>
        </div>
        <div className="button">
          <button className="select-image" onClick={selectImage}>
            Select Image
          </button>
          <button className="search" onClick={onSearch}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;
