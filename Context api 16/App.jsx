import React from 'react'
import { Link ,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
const App = () => {
  return (
  <div>
      <nav className=' mt-10 flex justify-center gap-10' >
       <Link to="/">Home</Link>
        <Link to="/user">User</Link>
       <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>

    </div>
  )
}

export default App
