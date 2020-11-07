import React,{useState,useRef,useEffect} from 'react';

function AppUseRefCase2(){
    const [name,setName]= useState('')
    const prevName = useRef('')
    useEffect(()=>{
        prevName.current = name
    },[name])
  

    return(
        <div>
        <h1>  useRef Use Case 3: store the previous value</h1>
        <input  onChange={(e)=>setName(e.target.value)} value={name}/>
        <div>My name is {name} and my prev name was {prevName.current}</div>
        </div>
    )
}


export default AppUseRefCase2;