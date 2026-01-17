import { useEffect, useState } from 'react'
import './App.css'
function App() {


  const [count, setCount]=useState(0)
  const [total, setTotal]=useState(0)
// WITHOUT DEPENDENCY ARRAY IT RUNS ON  EVERY RENDER RENDER
//  useEffect(()=>{
//   alert("alert on each render")
//  })


// WITH DEPENDENCY ARRAY IT RUNS ONLY FIRST RENDER
// useEffect(()=>{
//  alert("i will run on only first render");
// },[])


//VARIATION NUMBER 4 
// useEffect(()=>{
//  alert("i will run on count is updated");
// },[count])

//VARIATION NUMBER 5

// useEffect(()=>{
//  alert("i will run on count and total will updatedupdated");
// },[count,total])
//   function handleClick(){
//     setCount(count+1);
    
//   }

//VARIATION NUMBER 5

 useEffect(()=>{
alert("count is updated")
return()=>{
  alert("count is unmounted from ui")
}
 },[count])

  function handleClickTotal(){
    setTotal(total+1);
  }
    function handleClick(){
    setCount(count+1);
    }


  return (
    <>
  <button onClick={handleClick}> click me</button>
  <br />
  count is: {count}
  <br />
   <button onClick={handleClickTotal}> click me</button>
  <br />
  update total: {total}
    </>
  )
}


export default App
