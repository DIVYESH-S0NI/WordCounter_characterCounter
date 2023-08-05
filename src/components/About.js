// import React, { useState } from 'react'

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'

  // })
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
  };
  // const [btntext, setBtnText] = useState('Enable Dark Mode')

  // const toggleStyle = () => {
  //   if (myStyle.color === 'black') {
  //     setmyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '1px solid white'
  //     })
  //     setBtnText('Enable Light Mode')
  //   }
  //   else {
  //     setmyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setBtnText('Enable Dark Mode')
  //   }
  // }
  return (
    <div classNameName="container" style={myStyle}>
      <h1 classNameName='my-3' style={{
        color: props.mode === 'dark' ? 'white' : '#042743',
      }}>About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <strong>   Analyse Your Text      </strong>

            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>  'You can do many things-
              uppercase to lowercase latter,
              maintain proper space,
              check the speed of written words. </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <strong>  Free To Use </strong>
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}> We will happy to introduce this "Textutis".u will use this ,and it is completly free.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}> We will easy to use </div>
          </div>
        </div>
      </div>
      {/* <div classNameName="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div> */}




    </div>


  )
}
