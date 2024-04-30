import "./App.css";
import Navbar from "./components/Navbar";
import Cryptoform from "./components/Cryptoform";
import React, { useState } from "react";
import Alert from "./components/Alert";
//import About from "./components/About.js";


function App() {
  const[mode, setMode] = useState('light'); //whether dark mode is enable or not
  
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert ({
      msg : message,
      type : type

    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);


  }



  const toggleMode = ()=>{
    if (mode === 'light') {
        setMode ('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode enabled","success");



    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success");
    }
    


  }
  
  return (
    <>
      {/* <Navbar Title= "Crypto" aboutText = "About Link"/>   */}

        <Navbar title= "crypto" mode ={mode} toggleMode={toggleMode}/>  
        <Alert alert = {alert}> </Alert>

      <div className="container my-3" >

      <Cryptoform showAlert= {showAlert} heading= "Enter the text" mode ={mode}/> 

      {/* <About> </About>  */}
      </div>

    </>
  );
}

export default App;
