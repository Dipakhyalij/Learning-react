
import { useMemo, useState } from 'react'
import './App.css'

function App() {
const [count, seCount]=useState(0);
const [input, setInput]= useState(0);

  function expensiveTask(num){
    console.log("inside expensive task");
    for(let i=0;i<=100000000000; i++){}
     return num*2;
  }
  let doubleValue= useMemo(()=>expensiveTask(input),[input]);
  

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={()=>seCount(count+1)}>increament</button>
      <input type="number" placeholder='enter number for double' value={input} />
      <div>
        double:{doubleValue}
      </div>
    </div>

  )
}

export default App
