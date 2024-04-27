import React from 'react'
import Navbar from './Components/Header/Navbar'
import Login from './Pages/Login'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Admin from './Pages/Adminlink'
import Auth from './Components/Auth/Auth'

const App = () => {

  return (
<>
    <Navbar/>
     <Routes> 

      <Route path='/register' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>

      <Route path='/' element={<Auth/>}>
        <Route path='admin' element={<Admin/>}>
        </Route>
      </Route>

     </Routes>




</>
   
  )
}

export default App