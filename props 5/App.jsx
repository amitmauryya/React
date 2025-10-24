import React from 'react'
import Card from './components/Card'
function App(){
  return (
    <>
       <Card text="Know more" color="bg-blue-500"/>
       <Card text="Download" color="bg-red-500"/>
    </>
  )
}

export default App
// props use hota hai apke components ko reusable bannae ke liye consider karo aapk'e pass ek button hai and aapko us button ko alag alag jagh daalna hia app mein to aap ek button component bannaay eand usk data hard coded karne ki jagah parent componnent se send karde and child componnent par  use kar le 

