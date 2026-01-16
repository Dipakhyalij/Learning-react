import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    alert("i am clicked")

  }

  function handleMouseOver(){
    alert("your mouse on para ")
  }

  function handleInputChange(e){
   console.log("input value changed")
  }
 
  function handleSubmit(e){
    e.preventDefault();

    //i am writting my custom behaviour
    alert("can i submit the form");
  }
  return (

<button onClick={()=>(alert("button are aclicked"))}>
  click me
</button>

  )
  
   {/*} <>
  <div>
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleInputChange} />
    <button type='submit'>submit</button>
  </form>



    {/* <p onMouseOver={handleMouseOver} style={{border:"1 px solid black"}}>
      i am a para
    </p>
    <button onClick={handleClick}>
      Click Me
      </button> */}

}

export default App
