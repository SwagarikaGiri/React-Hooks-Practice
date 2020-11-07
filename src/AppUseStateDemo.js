import React,{useState} from 'react';

import './App.css';

function AppUseStateDemo() {

//for single element
//  function countInitial(){
//      console.log('run function');
//     return 4;

//  }
//    const [count,setCount] = useState(()=>countInitial());
//   function decrementCount(){
//     setCount(prevCount => prevCount -1)
//   }
//   function increment(){
//     setCount(prevCount => prevCount + 1)
//   }

//   return (
//     <div>
//     <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//      <button onClick={increment}>+</button>
//     </div>
//   );


//for objects


   const [state,setState] = useState({count:4,theme:'blue'});
   const count = state.count
   const theme = state.theme
  function decrementCount(){
   setState(prevState =>{
     return {...prevState, count: prevState.count -1}
   })
  }
  function increment(){
    setState(prevState =>{
     return {...prevState, count: prevState.count+1}
   })
  }

  return (
    <div>
    <h1>useState demo</h1>
    <button onClick={decrementCount}>-</button>
      <span>{count}</span>
       <span>{theme}</span>
     <button onClick={increment}>+</button>
    </div>
  );
}

export default AppUseStateDemo;
