import React from "react";

const Student=(props)=>{
  return(
    <div>
 <div>
  <div className="user-container"> 
  <h1 id='user-name'>{props.name}</h1>
  <p id="user-desc">{props.age}</p>
  </div>
  </div>
    </div>
  )

}
export default Student