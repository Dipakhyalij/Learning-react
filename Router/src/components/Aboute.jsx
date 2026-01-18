import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboute = () => {

  const navigate = useNavigate();
  function handleClick(){
    navigate('/dashboard');
  }
  return (
    <div>Aboute
      <button onClick={handleClick}>
        go to dashboard page
      </button>
    </div>
  )
}

export default Aboute