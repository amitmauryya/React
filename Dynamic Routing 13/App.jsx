import React from 'react'
import { Link ,Route ,Routes } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'
import Routing from './utils/Routing'
import Nav from './components/Nav'
const App = () => {
  return (
    <>
       <Nav/>
       <Routing/>
    </>
  )
}

export default App

