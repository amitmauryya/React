import React, { useState } from 'react'

function App() {
  const [val, setVal] = useState({ name:"", age:"" });

  return (
    <form action="" onSubmit={(e) => {
      e.preventDefault();
      console.log(val.name);
      console.log(val.age);
    }
    }>
      <input type="text" onChange={(elem)=>setVal({...val,name:elem.target.value})} placeholder='name' />
      <input type="text" onChange={(elem) => setVal({ ...val,age:elem.target.value })} placeholder='age' />
      <input type="submit" />
     </form>
  )
}

export default App
