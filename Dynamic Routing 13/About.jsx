import React from 'react'

const About = () => {
  return (
     <>
        <div className='w-full flex justify-center '>
        <div className='w-1/2 flex flex-col gap-3 '>
          <h1 className='bg-sky-400 self-start px-3 py-1 rounded-md'>About</h1>
          <p className=' text-zinc-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum placeat sint aliquid, cumque dolorum unde quo voluptatum omnis molestias enim quam nemo fuga recusandae laborum consequatur, accusamus impedit accusantium tempore, id quod mollitia esse! Explicabo qui harum maxime atque vero rem labore corporis a unde ipsa, facilis neque dignissimos hic.</p>
          <button className=' p-1 rounded-md text-xs inline self-start bg-amber-300 '>Explore more..</button>
        </div>   
        </div>
     </>
  )
}

export default About

