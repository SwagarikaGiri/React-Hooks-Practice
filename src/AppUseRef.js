import React,{useState,useRef,useEffect} from 'react';

function AppUseRef(){
    const [name,setName]= useState('')
    const renderCount = useRef(0)
    useEffect(()=>{
        renderCount.current = renderCount.current + 1

    })
    return(
        <div>
        <h1> Hello have a tutorial about useRef</h1>
        <input onChange={(e)=>setName(e.target.value)} value={name}/>
        <div>My name is {name}</div>
        <div>This component was rendered {renderCount.current} no's of times </div>
        </div>
    )
}


export default AppUseRef;