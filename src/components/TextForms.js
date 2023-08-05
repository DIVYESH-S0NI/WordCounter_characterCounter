import React, { useState } from 'react'

export default function TextForms(props) {

  const handleUpClick = () => {
    console.log('uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase', 'success');

  }

  const handleLoClick = () => {
    console.log('uppercase was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase', 'success');
  }

  const handleClearClick = () => {
    console.log('uppercase was clicked' + text);
    let newText = '';
    setText(newText);
    props.showAlert('Clear the text', 'success');

  }

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert('Remove the Extra Space', 'success');

  }

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  //text ='new text'; //wrong way to change state
  //setText ('new text');//corret way to chage state 

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2 className='mb-2'> {props.heading} </h2>
        <div className="mb-3">
          <textarea className='form-control' value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id=' myBox' rows="8"> </textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div >
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>your text summary</h2>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minut read </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  )
}

