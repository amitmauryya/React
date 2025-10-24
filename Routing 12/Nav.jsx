import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
    <div className='p-5 flex justify-center  gap-10'>
        <NavLink style={(e) => {
                  return {
                      color: e.isActive ? "tomato" : "",
                      font: e.isActive ? "bold" : " "
                         }
                                 }
                     } to="/">Home
        </NavLink>
     <NavLink style={(e) => {
                  return {
                      color: e.isActive ? "tomato" : "",
                      font: e.isActive ? "bold" : " "
                  }
              }
              } to="/user">User</NavLink>
     <NavLink style={(e) => {
                  return {
                      color: e.isActive ? "tomato" : "",
                      font: e.isActive ? "bold" : " "
                  }
              }
              } to="/about">About</NavLink>
    </div>
    </div>
  )
}
export default Nav
