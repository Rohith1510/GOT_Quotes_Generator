import { useEffect, useState } from "react";
import "./App.css"
import  axios from "axios";



function App() {
  const [quote, setquote] = useState("Random GOT Quotes");
  const[character,setcharacter] = useState("")
  const quoteGenerator=()=>{
    axios.get("https://api.gameofthronesquotes.xyz/v1/random/1")
    .then((res) =>{
       setquote(res.data.sentence)
       setcharacter(res.data.character.name)
    });
  }
  useEffect(()=>{
  axios.get("https://api.gameofthronesquotes.xyz/v1/random/1")
    .then((res) =>{
       setquote(res.data.sentence)
       setcharacter(res.data.character.name)
    });
  },[]); 

  return (
    <div className="App">
            <div className="video-background">
        <video autoPlay loop muted>
          <source src="Gradient-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="card">
        <div className="content">
      <h2>GOT Random Quotes</h2>   
      <h3>{quote}</h3>
      <p>- {character}</p>
      
      </div>
      <button className="btn" onClick={quoteGenerator}> generate</button>
      </div>
      
      
    
    </div>
  );
}

export default App;
