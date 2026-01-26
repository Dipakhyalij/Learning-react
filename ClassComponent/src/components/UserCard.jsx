import React from "react";
import './UserCard.css';
const UserCard=(props)=>{
  return (
   <div>
  <div className="user-container"> 
  <h1 id='user-name'>{props.name}</h1>
  <p id="user-desc">{props.desc}</p>
  </div>
  </div>
  )
}
export default UserCard