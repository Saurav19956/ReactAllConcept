import {useState} from 'react';


export default function App(){
const [state, setState] = useState('lemon');
function updateState(){
  setState('orange')
}

return (
 <div>
  <h1>
    {state}
  </h1>
  
  <button onClick={updateState}>update name</button> 
  </div>
 
)
}