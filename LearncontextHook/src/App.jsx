import { createContext, useState } from 'react'
import ChildA from '../component/ChildA';

import './App.css'
//step 1 create context
 const UserContext = createContext();


//step 2 wrap all the child inside a provider
//step 3 pass value
// step 4 consume the value in cosumers component

const ThemContext = createContext();


function App() {
const [user,setUser]=useState({name:"diapk"})
const [Theme, setTheme] = useState('light');
  return (
    <>
    <UserContext.Provider value={user}>
    <ThemContext.Provider value={{Theme, setTheme}}>
      <div id='container' style={{backgroundColor:Theme==='light'? "beige":"black"}}>
     <ChildA></ChildA>
      </div>
     
    
  

    
      <ChildA></ChildA>
      </ThemContext.Provider>
    </UserContext.Provider>
   
    </>
  )
}

export default App
export {UserContext}
export {ThemContext}