import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import UserCart from './component/UserCart'
import Button from './component/Button'

function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    setCount(count+1);
  }
//create staste 
//manage this.state
//change state
// sync state in all child


const [name, setName]= useState('');
  return (
    <div>
   <UserCart name={name} setName={setName}></UserCart>

   <p> I AM INSIDE PARENT component and value of name is: {name}</p>








{/* usestate */}
 {/* <Counter></Counter> */}
 
{/* <div>
  
  <Button handleClick={handleClick} text="Click Me">
     <h1>{count}</h1>
    </Button>

    </div> */}
   {/*
   <div id='container'>
   <UserCart name="love rama" >
    <h1>Beest Web Dev ourse</h1>
    <p>trying to be consistent in this</p>
    <p>will complete the course soon</p>
   </UserCart>
   <UserCart children="mai childreb hun"></UserCart>
     </div>
   */}



    </div>
  )
}

export default App
