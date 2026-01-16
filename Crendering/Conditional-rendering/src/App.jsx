import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  if(!isLoggedIn){
    return(
      <LoginBtn />
    )
  }

//USING LOGICCAL OPARATOR 

return(
  <div><h1>welcome everyone to y web site </h1> 
  <div></div>
  {isLoggedIn && <LogoutBtn />}
  </div>
)


//USING TERNERY OPRATOR
// return(
//   <div>{isLoggedIn? <LogoutBtn/> : <LoginBtn />}</div>
// )


//   //USING IF-ELSE
// if(isLoggedIn){
// return (
//   <LogoutBtn/>
// )
// }
// else{
// return (
// <LoginBtn />)
// }

}

export default App
