import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React from 'react';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');//whether dark mode is ewnabled or not
  
  const togglemode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';

    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#2d3063';
  
    }
  }
  return (
    <>
    {/* <Navbar title="Textutils" hometext="Home"/> */}
    <Navbar  title="Text Analyzer" mode={mode} togglemode={togglemode}/>
    <div className="container my-3">
    <TextForms heading="Enter The Text To Analyze" mode={mode} />
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
