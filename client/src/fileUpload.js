import React from "react";
import { useState } from "react";
import axios from "axios";

function SelectImage() {
  const [image, setImage] = useState({
    name: "",
    img: { data: "" },
  });

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }
  async function onSubmit() {
    const formData = new FormData();
    formData.append("name", "test");
    formData.append("testImage", image);

    axios.post("http://localhost:5000/upload", formData, {}).then((res) => {
      console.log(res);
    });
  }

  return (
    <div>
      <h1>Image uploading react</h1>
      <div>
        <input type="file" name="file" onChange={handleImage} />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default SelectImage;
