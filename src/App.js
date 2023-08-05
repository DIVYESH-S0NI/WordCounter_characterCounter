
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForms';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');            //whether dark mode enable orr not 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { setAlert(null); }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has bbeen Enable", 'success')
      // document.title = 'TextUtils-Dark Mode';
      // setInterval(() => { document.title = 'Te  Modeeeeeeeeeeeeeeeee'; }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has bbeen Enable", 'success')
      // document.title = 'TextUtils-Light Mode';
      // setInterval(() => { document.title = 'cccccc'; }, 1500);

    }
  }


  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter,character Counter,Remove Extra Spaces" mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}



export default App;
