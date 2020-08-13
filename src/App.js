import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import ImgContent from "./components/ImgContent";


function App() {

const [img, setImg] = useState("")

  useEffect(() => {
    //use axios
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_BASE_URL}`)
    //on success breakpoint
    .then(res => {
      console.log(res.data);
      setImg(res.data)
    })
    //on failure breakpoint
    .catch(err => {
      console.log('error');
    })
    
  }, [])

const [weather, setWeather] = useState("")

  useEffect(() => {
    //use axios
    axios.get(`https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_BASE_URL}&feedtype=json&ver=1.0`)
    //on success breakpoint
    .then(res => {
      console.log(res.data);
      setWeather(res.data)
    })
    //on failure breakpoint
    .catch(err => {
      console.log('error');
    })
    
  }, [])
  


  return (
    <div className="App">
      <ImgContent passingImgState={img} />
    </div>
  );
}

export default App;
