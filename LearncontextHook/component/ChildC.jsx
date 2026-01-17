import React,{useContext} from 'react'
import { ThemContext, UserContext } from '../src/App'
const ChildC = () => {
   
  const user = useContext(UserContext);
  const {Theme, setTheme} = useContext(ThemContext);
  function handleClick(){
       if(Theme==='light')
       setTheme('dark')
       else
        setTheme('light')
  }


  return (
    <div>
      <button onClick={handleClick}>change Theme</button>
      <h1>{user.name}</h1>
    </div>
  )
}

export default ChildC 