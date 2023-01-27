//import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Display() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  // console.log(data);
  return (
    <div>
      {data.map((singleData) => {
        const base64String = btoa(
          new Uint8Array(singleData.img.data.data).reduce(function (
            data,
            byte
          ) {
            return data + String.fromCharCode(byte);
          },
          "")
          //Error when size become bigger
          //String.fromCharCode(...new Uint8Array(singleData.img.data.data))

          //https://stackoverflow.com/questions/49123222/converting-array-buffer-to-string-maximum-call-stack-size-exceeded
        );

        return (
          <img
            src={`data:image/png;base64,${base64String}`}
            width="300"
            alt=""
          />
        );
      })}
    </div>
  );
}

export default Display;
