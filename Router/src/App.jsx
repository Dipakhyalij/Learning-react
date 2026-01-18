import { useState } from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './components/home';
import Aboute from './components/Aboute';
import Dashboard from './components/dashboard';
import Navbar from './components/Navbar';
import Parameter from './components/Parameter';
const router  = createBrowserRouter(
  [{
    path:"/",
      element:
      <div>
        <Navbar />
         <Home />

      </div>
     
    },
    {
    path:"/about",
      element:
       <div>
        <Navbar />
         <Aboute />

      </div>
    },

    {
    path:"/dashboard",
      element: 
     <div>
        <Navbar />
         <Dashboard />

      </div>
    },
    {
      path:"/student/:id",
      element:
        <div>
        <Navbar />
         < Parameter/>

      </div>
    }
  ]

);
function App() {

  return (
  <div>
    <RouterProvider router={router}>
    <Navbar/>
    </RouterProvider>
  </div> 
  )
}

export default App
