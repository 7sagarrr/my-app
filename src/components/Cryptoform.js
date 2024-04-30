import React, {useState} from 'react';


export default function Cryptoform(props) {
    const uppercase = ()=>{
        // console.log("Uppercase clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success");



      }
        const lowercase = ()=>{
          // console.log("lowercase clicked")
          let newText = text.toLowerCase();
          setText(newText)
          props.showAlert("converted to lowercase", "success");

    }
    const clearText = ()=>{
      // console.log("lowercase clicked")
      let newText = (' ');
      setText(newText)
      props.showAlert("Cleared text", "success");


}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Speaking Text", "success");
}


    const upperchange = (event)=>{
        // console.log("onchange clicked")
        setText(event.target.value);
        


    }
    const [text, setText] = useState('');  


  return (
    <>
    <div className="container" style={{backgroundColor:props.mode==='light'?'white':'grey'}}>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea className="form-control" value={text} onChange={upperchange} style={{backgroundColor:props.mode==='dark'?'grey':'white', Color:props.mode==='light'?'white':'dark'}} id="box" rows="8"></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={uppercase}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2"  onClick={lowercase}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={clearText}>Clear TEXT</button>
      <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
    </div>
    <div className="container my-5" style={{backgroundColor:props.mode==='light'?'white':'grey'}}>
    <h1>Text summary</h1>
    <p>No. of words are {text.split(" ").length}  and Character length is {text.length}</p>
    <p>it will take {0.008* text.split(" ").length} Mins to read it </p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"enter your text above"}</p>
    
    </div>


    </>

  );
}
