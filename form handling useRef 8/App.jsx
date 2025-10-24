import React, { useRef } from 'react'

function App() {
  const name=useRef(null);
  const age=useRef(null);
  const handlesubmit=(event)=> {
    event.preventDefault();
    console.log(name.current.value);
    console.log(age.current.value);
  }
  return (
    <form action="" onSubmit={handlesubmit} >
      <input ref={name} type="text" placeholder='enter your name' />
      <input ref={age}  type="text" placeholder='enter your age' />
      <input type="submit"  />
    </form>
  )
}

export default App
