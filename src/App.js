import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

function App() {

const [img, setImg] = useState("")

  useEffect(() => {
    //use axios
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_BASE_URL}`)
    //on success breakpoint
    .then(res => {
      console.log(res.data);
    })
    //on failure breakpoint
    .catch(err => {
      console.log('error');
    })
    
  }, [])
  


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {/* <Weather /> */}
    </div>
  );
}

export default App;
