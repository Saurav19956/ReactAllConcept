import {useReducer} from 'react';
import './App.css';

const reducer = (state,action)=>{
  if(action.type === 'buy-ingredient') return {money: state.money -10}
  if(action.type === 'sell') return {money: state.money+10}
  if(action.type === 'celebrity visit') return {money: state.money+5000}
  return state

}


function App(){
  const initialState = {money: 100};
  const [state, dispatch] = useReducer(reducer,initialState);

  return(
    <div>
    <h1>wallet: {state.money}</h1>
    <div>
<button onClick={()=>dispatch({type:'buy-ingredient'})}>shopping for vegie!</button>
<button onClick={()=>dispatch({type:'sell'})}>sell!</button>
<button onClick={()=>dispatch({type:'celebrity visit'})}>celebrity!</button>
    </div>
    </div>
  )
}

export default App;