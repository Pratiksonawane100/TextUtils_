import React, {useState} from "react";

export default function Form(props) {
  const handleupclick = ()=> {
    console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success")

  }
  const handleloclick = ()=> {
    console.log("Uppercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase","success")
  }

  const handleonchange = (event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter text here');

  
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea
          className="form-control"
          value={text} onChange={handleonchange}
          id="exampleFormControlTextarea1"
          rows="6" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupclick}>
        convert Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleloclick}>
        convert Lowercase
      </button>
    </div>

    <div className="container" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}>
      <h2 >Text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
    </div>
    </>
  );
}
