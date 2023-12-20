import React from 'react'
import ictgm from '../assets/portfolio/ictgm.png';
import shopcric from '../assets/portfolio/shopcric.png';
import stopwatch from '../assets/portfolio/stopwatch.png';

function portfolio() {

  const projects=[
    {
      id: 1,
      //src: shopcric,
      name: 'Quiz Adda',
      style: 'shadow-green-500',
      code: 'https://github.com/devkumar27/Quiz-Adda',
      demo: 'https://quizadda-b37.netlify.app/',
      desc: 'A portal where one can create a quiz, join a quiz and invite someone to play a quiz.'

    },
    {
        id: 2,
        name: 'Room Minder',
        //src: ictgm,
        style: 'shadow-blue-500',
        code:'https://github.com/devkumar27/Room-Minder',
        demo: 'https://github.com/devkumar27/Room-Minder',
        desc: 'A Hostel Room Maintenance System where students staying in hostels can file maintenance requests to the Hostel Authority. '
    },
    {
      id: 3,
      name: 'Stopwatch',
      //src: stopwatch,
      style: 'shadow-green-500',
      code:'https://github.com/devkumar27/stopwatch-js',
      demo: 'https://devkumar27.github.io/stopwatch-js/',
      desc: 'A simple stopwatch designed using HTML, CSS and JavaScript.'
    },
    {
      id: 4,
      name: 'ShopCric',
      style: 'shadow-green-500',
      code: 'https://github.com/devkumar27/ecommerce-cricket-shop-webdesign',
      demo: 'https://shopcric.netlify.app',
      desc: 'An E-Commerce website for selling cricketing goods. It is developed using HTML, CSS, JavaScript, and Bootstrap5'
    },
    {
      id: 5,
      name: 'ICT Greatest Wins',
      //src: ictgm,
      style: 'shadow-blue-500',
      code:'https://github.com/devkumar27/ict-photo-gallery',
      demo: 'https://devkumar27.github.io/ict-photo-gallery/',
      desc: 'A static Front-end webpage of some of the greatest moments in the history of Indian cricket using HTML, CSS, JS and Bootstrap5.'
  },
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
        projects.map(({id,name,style,demo,code,desc})=>(
        <div key={id} className={`duration-300 hover:scale-105 shadow-md  rounded-lg ${style}`}>
          <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo} target="_blank" >Demo</a></button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code} target="_blank" >Code</a></button>
          </div>
          <h2 className='flex items-center justify-center font-bold'>{name}</h2>
          <p className='flex items-center justify-center px-6'>
            {desc}
          </p>
        </div>
        ))
      }
      </div>
    </div>
  </div>
  )
}

export default portfolio
