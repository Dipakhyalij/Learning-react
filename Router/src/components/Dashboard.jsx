import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
   
  const navigate= useNavigate();
  function handleClick(){
    navigate('/');
  }
  return (
    <div>Dashboard

      <button onClick={handleClick}>
        got return to hame page
      </button>
    </div>
  )
}

export default Dashboard