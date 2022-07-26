import React,{useState} from "react";

export default function TextForms(props) {
  const handleUpClick = ()=>{
    console.log("uppercase was clicked");
    let text1=text.toUpperCase();
    //setText("You Have clicked on handleUpClick");
    setText(text1);
  }

  const handleLoClick = ()=>{
    console.log("uppercase was clicked");
    let text1=text.toLowerCase();
    //setText("You Have clicked on handleUpClick");
    setText(text1);
  }

  const handleOnChange = (event)=>{
    //console.log("uppercase was clicked");
    setText(event.target.value);
  }

  const repwor =()=>{
    let toreplaced=prompt("Enter The Word To Be Replaced : ");
    let tobereplaced=new RegExp(toreplaced,'g');
    let repval=prompt("Enter The replaced word : ");
    let newtext=text.replace(tobereplaced,repval);
    setText(newtext);
  }

  const tocleartext = ()=>{
    setText('');
  }

  // const firstcharcap = ()=>{
  //   //let newtext=text.charAt(0).toUpperCase()+text.slice(1);
  //   let newtext=text.split(" ")
  //   newtext[0].toUpperCase();
  //   setText(newtext);
  // }

  const [text,setText]=useState('Write something');
  //console.log(useState('Enter Text 2'))
  //text="new text";//wrong way to change the state 
  //setText("new text");


  const handlecopy = ()=>{
      var text=document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
  }

  const handleextraspace = () =>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
  }

  return (
    <>
    <div className="container" style={{color : props.mode==='light'?'black' : 'white'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
            value={text}  
              onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            style={{backgroundColor : props.mode==='light'?'white' : '#8f90a1',color : props.mode==='light'?'black' : 'white',fontSize:'25px'} }
          rows="10"
        ></textarea>
      </div>


      <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx" onClick={repwor}>Replace All Occurences</button>
      <button className="btn btn-primary mx-3" onClick={tocleartext}>clear the console</button>
      {/* <button className="btn btn-primary mx" onClick={firstcharcap}>Capitalise all first character </button> */}
      <button className="btn btn-primary mx-" onClick={handlecopy}>copy text</button>
      <button className="btn btn-primary mx-3" onClick={handleextraspace}>remove extra space</button>


    </div>
     <div className="container my-5" style={{color : props.mode==='light'?'black' : 'white'}}>
        <h1 >Your Text Summary </h1>
        <p>{text.split(" ").length} words and {text.length} characters and {text.split(".").length} sentences. and {text.split("\n").length
        } paragraphs</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something In The The Textbox Above To Preview Here"}</p>
     </div>
     
     
    </>
  );
}

TextForms.defaultProps = {
  heading: "This Is My Heading",
};
