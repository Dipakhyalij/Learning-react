import './App.css'
// 1. Fixed the spelling of "components"
import Home from './componets/Home'
import Navbar from './componets/Navbar'
import Paste from './componets/Paste'
import ViewPaste from './componets/ViewPaste'; // 2. Matched casing

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/", // Correct
    element:
    <div>
      <Navbar/>
      <Home />
    </div>
  },
  {
    path: "/pastes", // 3. Changed 'Path' to 'path' (lowercase)
    element:
    <div>
      <Navbar/>
      <Paste/>
    </div>
  },
  {
    path: "/pastes/:id", // 3. Changed 'Path' to 'path' (lowercase)
    element:
    <div>
      <Navbar/>
      <ViewPaste/>
    </div>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App