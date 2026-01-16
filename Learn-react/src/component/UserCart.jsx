import React from 'react'
import userpic from '../assets/userpic.png'

import './UserCart.css'

const UserCart = (props) => {
  return (
    <div className='user-container'>
     {props.children}
</div>
  )
}

export default UserCart