import { useState, useRef } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1>StopWatch: {time} seconds</h1>

      <button onClick={startTimer}>START</button>
      <br /><br />

      <button onClick={stopTimer}>STOP</button>
      <br /><br />

      <button onClick={resetTime}>RESET</button>
    </>
  );
}

export default App;
