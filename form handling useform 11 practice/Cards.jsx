import React from 'react'
import Card from './Card'
function Cards({ users ,RemoveHandle }) {
  return (
      <div className='w-full h-[35vh] overflow-auto p-2 flex justify-center gap-4 flex-wrap'>
      {
        users.map((elem, index) => {
          return <Card key={index} user={elem} id={index} RemoveHandle={RemoveHandle} />
          }
          )
          }

        
       </div>
  )
}

export default Cards
