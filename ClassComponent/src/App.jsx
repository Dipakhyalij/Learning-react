import Student from "./components/Student"
import UserCard from "./components/UserCard"


function App() {
 

  return ( 
    <div>
     {/* <UserCard name="dipak patil" desc="this is all about dipak patil"/>

     <UserCard name="rushi patil" desc="this is all about rushi patil"/>

          <UserCard name="bhushan patil" desc="this is all about bhushan patil"/> */}

          <Student name="dipak" age="23"/>

           <Student name="rushi" age="22"/>

            <Student name="bhushan" age="20"/>

             <Student name="pravin" age="26"/>
    </div>
  )
}

export default App
