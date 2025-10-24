import axios from 'axios';
import React, { useState } from 'react';
import { HiH1 } from 'react-icons/hi2';
import Home from './components/Home';
import Show from './components/Show';
import About from './components/About';
import { Link, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div className='p-10'>
      <nav className='flex gap-10'>
        <Link to="/">Home</Link>
        <Link to="/show">Show</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr />
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/show" element={<Show/>}></Route>
         <Route path="/about" element={<About/>}></Route>
     </Routes>

    </div>
  )
}

export default App
