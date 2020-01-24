import React, {useState, useEffect} from "react";
import "./App.css";
import "./img-components/textContent.css";
import Axios from "axios";
import Image from "./img-components/Image";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  // const [query, setQuery] = useState([]);
  useEffect(() => {
    // const fetchData = () => {
      Axios
        .get("https://api.nasa.gov/planetary/apod?api_key=1w2dF76DitETVCM4EdskaOLHachcvZkM6re3KTCh")
        .then( resource => {
          // console.log(resource.data);
          setData(resource.data)
        })
        .catch(error => {
          console.log(error);
        })
    }, [])
  return (
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>

      <Image data={data}/>
    </div>
  );
}

export default App;
