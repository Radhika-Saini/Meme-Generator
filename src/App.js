import React,{useState,useEffect} from 'react';
import './App.css';
import Templates from './Templates';
import Meme from './Meme';



function App(){
  const [templates,setTemplates]=useState([]);
  const [meme,setMeme]=useState(null);

  const fetchTemplate=async()=>{
    const response=await fetch("https://api.imgflip.com/get_memes");
    const memes=await response.json();
    setTemplates(memes.data.memes);
  }

  useEffect(()=>{
    fetchTemplate();
  },[]);
  
  
  return(
    <div className="App">
      <h1>Meme Generator</h1>
      <h3>Choose any Template and make your meme</h3>
      {meme===null? <Templates templates={templates} 
      setMeme={setMeme} />
      : <Meme meme={meme} setMeme={setMeme}/>}
    </div>
  );
}

export default App;
