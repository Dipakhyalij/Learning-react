import React from 'react'
import userpic from '../assets/userpic.png'

import './UserCart.css'

const UserCart = (props) => {
  return (
//     <div className='user-container'>
//      {props.children}
// </div>
<div>
  <input type="text" onChange={(e)=> props.setName(e.target.value)} />
  <p> name state variable ki value inside cart :{props.name}</p>
</div>
  )

}

export default UserCart