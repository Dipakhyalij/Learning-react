import { useForm } from "react-hook-form"
import './App.css'


function App() {

     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data){
console.log("submiting the form", data);

  }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div> 
        <label>First Name:</label>
        <input{...register("firstName",{ required: true, minLength:3, maxLength:5 })}  />
      </div>
      <br />
      <div> 
        <label>Middle Name:</label>
        <input {...register("middleName")}   />
      </div>
      <div> 
        <br />
        <label>Last Name:</label>
        <input {...register("lastName")}  />
      </div>
      <br />

      <input type="submit" />
    </form>
    </>
  )
}

export default App


dt20267569088 