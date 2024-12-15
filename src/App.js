import React,{} from 'react';
import './App.css';



function App(){
  const formInputRef = React.useRef(null);

const focusInput = ()=>{
  formInputRef.current.focus();
}

  return(
    <>
    <h1>useing useRef to access underlyong DOM</h1>
    <input ref= {formInputRef} type= 'text'/>
    <button onClick={focusInput}>focus input</button>
    </>
  )

  
}

export default App;