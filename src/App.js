import {useState} from 'react';

/*
export default function App(){
const [greeting, setGreeting] = useState({greet: 'Hello world!'});
console.log(greeting, setGreeting);

function updateGreeting(){
  setGreeting({greet: 'Namaskar'})
}
return (
  <div>
    <h1>{greeting.greet}</h1>
    <button onClick={updateGreeting}>updateState</button>
  </div>
)
}

*/

/*

While this works, it's not the recommended way of working with state objects in React, 
this is because the state object usually has more than a single property,
 and it is costly to update the entire object just for the sake of updating only a small part of it.
*/



/*

The correct way to update the state object in React when using useState
The suggested approach for updating the state object in React when using useState is to copy the state object and then update the copy.

This usually involves using the spread operator (...).
*/



export default function App(){
  const [greeting, setGreeting] = useState({greet:'Hello world'});

  function updateGreeting(){
    const newGreet = {...greeting} // use spread hfor more than 1 property
    newGreet.greet = 'namaskar';
    setGreeting(newGreet)
  }

  return (
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  )
}




/*
Incorrect ways of trying to update the state object
To prove that a copy of the old state object is needed to update state, 
let’s explore what happens when you try to update the old state object directly:
*/


// export default function App() { 
//   const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     greeting = {greet: "Hello, World-Wide Web};  // cannot reassign const variable data type as greeting 
//     setGreeting(greeting); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 
