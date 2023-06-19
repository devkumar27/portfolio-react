import React from 'react'
import ictgm from '../assets/portfolio/ictgm.png';
import shopcric from '../assets/portfolio/shopcric.png';
import stopwatch from '../assets/portfolio/stopwatch.png';


function portfolio() {

  const projects=[
    {
      id: 1,
      src: shopcric,
      style: 'shadow-green-500',
      code: 'https://github.com/devkumar27/ecommerce-cricket-shop-webdesign',
      demo: 'https://shopcric.netlify.app'

    },
    {
        id: 2,
        src: ictgm,
        style: 'shadow-blue-500',
        code:'https://github.com/ict-photo-gallery',
        demo: 'https://devkumar27.github.io/ict-photo-gallery/'
    },
    {
      id: 3,
      src: stopwatch,
      style: 'shadow-blue-500',
      code:'https://github.com/devkumar27/stopwatch-js',
      demo: 'https://devkumar27.github.io/stopwatch-js/'
    }
  ]
  return (
  <div name="projects" className='bg-gradient-to-b from-gray-800  to-black w-full text-white md:h-screen'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500 sm:p-top-12'>Projects</p>
        <p className='py-6'>Check out some of my work right here</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-9'>
      {
        projects.map(({id,src,style,demo,code})=>(
        <div key={id} className={`duration-300 hover:scale-105 shadow-md  rounded-lg ${style}`}>
          <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
          <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo} >Demo</a></button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code} >Code</a></button>
          </div>
        </div>
        ))
      }
      </div>
    </div>
  </div>
  )
}

export default portfolio
