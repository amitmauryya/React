import React from 'react'
function Card({text,color}) {
  return (
    <button className={`m-2   px-3 py-1 ${color} rounded-2xl`}>{text}</button>
  )
}

export default Card

