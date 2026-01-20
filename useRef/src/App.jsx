import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    // prevent multiple intervals
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTime() {
    stopTimer();
    setTime(0);
  }

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
