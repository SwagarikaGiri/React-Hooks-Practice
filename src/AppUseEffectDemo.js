import React,{useState,useEffect} from 'react';

import './App.css';

function AppUseEffectDemo() {


 console.log("render")


   const [resourceType, setResourceType] = useState('posts');

 useEffect(()=>{
   console.log("resource type change")

 },[resourceType])
  

  return (
    <div>
    <h1>useEffect demo</h1>
    <button onClick={()=>{setResourceType('posts')}}>Posts</button>
    <button onClick={()=>{setResourceType('users')}}>Users</button> 
    <button onClick={()=>{setResourceType('comments')}}>Comments</button>
    <h1>{resourceType}</h1>
    </div>
  );
}

export default AppUseEffectDemo;
