import './App.css';
import Navbar from './component/Navbar';
import Form from './component/Form';
import Alert from './component/Alert';
// import About from './component/About';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from 'react';

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState('null');

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('white');
      document.body.style.backgroundColor = '#232D3F';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils-Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
      document.title = "TextUtils-Light Mode";

    }
  }
  return (
    <>
    <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}></Navbar>
    <div className="container"><Alert alert={alert}></Alert></div>
    <div className="container">
      <Form heading="Convert To The Uppercase" mode = {mode} showAlert={showAlert}></Form>
    </div>
    {/* <div className="container">
      <About></About>
    </div> */}
    
    </>
  );
}

export default App;
