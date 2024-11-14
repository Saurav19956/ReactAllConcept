import DessertList from './DessertList.js';

const dessert = [
  {name: "IceCream", price: 20},
  {name: "Cold Coffie", price: 30},
]


export default function App(){
  return(
    <div>
      <h1>Rendering list</h1>
      < DessertList data = {dessert}/>
    </div>
  )
}