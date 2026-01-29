import { useState } from "react"

function App() {
  const [count, setcount]=useState(0)

 function handleClick(){
    setcount(count+1)
  }
  return (
    <>
     <h1>this is Counter App</h1>
     <h2>the value of count is:  {  count}</h2>

     <button onClick={handleClick}>Increase Count</button>
    </>

  )
}

export default App
