import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[count, setCount]=useEffect(0);

  //first-> side-effect function
  //second -> cleanup function
  //third -> comma separated dependency list
  useEffect(()=>{
    alert("i will run on each render")
  })

  function handleClick(){
    setCount(count+1);
  }
   return(
    <>
  <button onClick={handleClick}>
    click me
  </button>
    </>
  )
}

export default App
