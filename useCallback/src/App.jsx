import { useState } from 'react'
import './App.css'
import Childcomponent from './components/Childcomponent';

function App() {
  const [count, setCount] = useState(0)


  function handleClick(){
    setCount(count+1);
  }
  return (
    <>
<div>
  count:{count} 
  </div>  
  <br />    
  <button onClick={handleClick}>Increment button</button>  
  <br />  
  <div>
     <Childcomponent btnName="Clickme"></Childcomponent>
  </div>
    </>
  )
}

export default App
