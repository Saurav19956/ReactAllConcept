// import DessertList from './DessertList.js';

// const dessert = [
//   {name: "IceCream", price: 20},
//   {name: "Cold Coffie", price: 30},
// ]


// export default function App(){
//   return(
//     <div>
//       <h1>Rendering list</h1>
//       < DessertList data = {dessert}/>
//     </div>
//   )
// }


import react, {useState} from 'react';


function AppFeedBackForm(){
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');
  const handleSubmit = (e)=>{
    if(Number(score) <= 5 && comment.length < 10){
      alert('please provide comment why experience was poor')
    }
    console.log('form submitted');
    setScore(0);
    setComment('')
    
  }
    return(
        <div>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <h2> Feedback form</h2>
                <div>
                  <label>Score:{score}</label>
                  <input type = "range" min= "0" max= "10" value ={score} onChange={e=>setScore(e.target.value)}/>
                </div>
                <div>
                  <label>Comment:</label>
                  <textarea value = {comment} onChange={e =>setComment(e.target.value)}/>
                </div>
                <button type='submit'>submit</button>
                </fieldset>
            </form>
        </div>
    )

}

export default AppFeedBackForm;