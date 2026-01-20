import { useState } from 'react' 
import { createRoot } from 'react-dom/client'
import './App.css'
import {Provider, useDispatch, useSelector} from 'react-redux'
import {store} from './Redux/store.js'
import { decrement, increment, reset } from './features/counter/counterSlice.jsx'

function App() {

  const count =useSelector((state)=> state.counter.value);

  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());

  }

  function handleDecrementClick(){
      dispatch(decrement());
  }

  function handleReset(){
   dispatch(reset());
  }

  return (
    <div className='container'> 
    <button onClick={handleIncrementClick}>+</button>
    <p>count:{count}</p>
    <button onClick={handleDecrementClick}>-</button>
    <br /><br />
    <button onClick={handleReset}> Reset</button>

    </div>
  )
}

export default App