import React from 'react' 
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SingUpPage from './pages/SingupPage'
import Navbar from './components/NavBar'
import CreateEvent from './pages/CreateEvent'
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className='text-red-700 font-extrabold'>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/create' element={<CreateEvent />}/>
        <Route path='/singup' element={<SingUpPage />}/>
      </Routes>
    </div>
  )
}

export default App