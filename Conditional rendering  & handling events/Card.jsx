// conditional rendaring 
import React from 'react'

function Card() {
    
  const data = [
    { name: "mahiya ve" ,description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia laboriosam amet aspernatur." }
    , {
      name: "junoon", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iure atque similique doloribus. Sed, eum."
    }
  ]
  const clickfunction = () => {
    alert("hey");
  }

  return (
    <div className='w-full h-screen bg-zinc-100 flex flex-col gap-10 justify-center items-center'>
      {data.map((ele, index) => (
        <div className='music w-90 px-3 py-2 bg-zinc-400 rounded '>
          <h3 className='font-semibold text-xl'>{ele.name}</h3>
        <p className='text-xs mt-5'>{ele.description}
        </p>
        <button onClick={clickfunction} className='px-2 py-1 bg-blue-400 rounded text-xs font-semibold text-zinc-100 mt-3 rounded'>Download Now</button>
       </div>
      ))}
    </div>
  )
}
 
export default Card
