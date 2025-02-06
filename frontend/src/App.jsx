import React from 'react' 
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SingUpPage from './pages/SingupPage'
import Navbar from './components/NavBar'

const App = () => {
  return (
    <div className='text-red-700 font-extrabold'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/singup' element={<SingUpPage />}/>
      </Routes>
    </div>
  )
}

export default App