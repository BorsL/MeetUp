import React, { useEffect } from 'react' 
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/NavBar'
import CreateEvent from './pages/CreateEvent'
import { Toaster } from "react-hot-toast";
import { useAuthStore } from './store/useAuthStore'
import {Loader} from 'lucide-react'

const App = () => {
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore()

  useEffect(()=>{
    checkAuth();
  }, [checkAuth]),

  console.log({authUser})

  if(isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
      <Loader  className="size-10 animate-spin"/>

    </div>
  )

  return (
    <div className='text-black font-extrabold'>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/create' element={<CreateEvent />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
      </Routes>
    </div>
  )
}

export default App