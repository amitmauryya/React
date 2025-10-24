import React, { useState } from 'react'

function Card() {
    const [score,setscore] = useState(false);
    
  return (
    <div className='px-5 py-4'>
          <h1>{score.toString()}</h1>
          <button onClick={()=>setscore(!score)} className='bg-sky-300 px-3 py-2 rounded mt-2'>change</button>
    </div>
  )
}

export default Card
