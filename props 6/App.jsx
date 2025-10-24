import React, { useState } from 'react'
import Card from './components/Card'
function App() {
  const data = [
    { name: "John", profession: "Painter", friends : false ,image:"https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwb2ZmaWNlfGVufDB8fDB8fHww"},
    {name: "Amit", profession: "Artist", friends : false ,image:"https://images.unsplash.com/photo-1666860339130-ca977001324e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Rahul",profession:"Thalua", friends : false ,image:"https://images.unsplash.com/photo-1753955671185-7f9af90ad3a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1lbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Sumit", profession: "Coder", friends : false ,image:"https://images.unsplash.com/photo-1717204931328-2c384be4a754?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1lbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"}
  ]
  const [realData, setRealData] = useState(data);
   const dummy = (cardIndex) => {
    return setRealData((previous) =>
       realData.map((item, index)=>{
       if(cardIndex === index){
          return {...item,friends:!item.friends}
     }
        return item;
       }
      ))
   }
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      {
        realData.map((item, index) => <Card item={item} key={index} dummy={dummy} index={index} />
    )}
    </div>
  )
}
export default App
// props use hota hai apke components ko reusable bannae ke liye consider karo aapk'e pass ek button hai and aapko us button ko alag alag jagh daalna hia app mein to aap ek button component bannaay eand usk data hard coded karne ki jagah parent componnent se send karde and child componnent par  use kar le 

