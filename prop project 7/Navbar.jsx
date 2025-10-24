import React from 'react';
function Navbar({val}) {
  return (
    <div className=' flex w-full px-20 py-3 justify-between items-center'>
          <h3>Orange</h3>
          <div className='flex p-2 px-4  gap-3 rounded-md text-sm text-white bg-orange-600'>
              <h3>favourites</h3>
              <h4>{val.filter((item) => item.favourite).length}</h4>
          </div>
          
    </div>
  )
}

export default Navbar

