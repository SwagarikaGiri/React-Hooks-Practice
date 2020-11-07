import React,{useState,useEffect,useMemo} from 'react';

function AppUseMemo(){
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(()=>{
        console.log("use memo function was called")
        return slowFunction(number)
        },[number])
    console.log(doubleNumber)
    const themeStyle =useMemo(()=>{
    return({
        backgroundColor : dark ? 'black' : 'white',
        color: dark ? 'white':'black'
    })},[dark])


    useEffect(()=>{
     console.log("theme is changed")
     
    },[themeStyle])
    return(
        <div>
        <h1> Use Memo Hook Too be practiced</h1>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
        <br/>
        <button onClick ={()=> setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyle}>{doubleNumber}</div>
        </div>
    )

}
function slowFunction(num){
    console.log("Calling a slow function")
    for(let i=0; i<1000000000; i++){}
    return num * 2;
}


export default AppUseMemo;