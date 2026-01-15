import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {

  const[count,setCount]=useState(0); 



  return (
    <div className='counter-container'>
      <p className="para">you have clicked {count } times</p>
      <button id= "button" onClick={()=>{setCount(count+1)}}>
         click me</button>
    </div>
  )
}

export default Counter