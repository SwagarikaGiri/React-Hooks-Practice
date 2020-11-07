import React,{useState,useRef,useEffect} from 'react';

function AppUseRefCase2(){
    const [name,setName]= useState('')
    const inputRef = useRef()

    function focus(){
        inputRef.current.focus()
       
    }

    return(
        <div>
        <h1>  useRef Use Case 2: assign ref to the html element and use focus property</h1>
        <input  ref={inputRef} onChange={(e)=>setName(e.target.value)} value={name}/>
        <div>My name is {name}</div>
        <button onClick={focus}>Focus</button>
        </div>
    )
}


export default AppUseRefCase2;