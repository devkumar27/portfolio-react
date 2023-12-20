import React from 'react';
import ethnus from '../assets/portfolio/ethnus.png';

const Experience = () => {
    const techs = [
        {
            id:1,
            title: 'MERN Full Stack Internship',
            org: 'Ethnus',
            src: ethnus,
            duration: "3 Months",
            period: "May 2023 - July 2023"
        }
    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to to-black w-full h-screen'>
         <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 sm:py-1 inline'>
                  <br/>
                    Experience
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id, title, src, org, duration, period})=>(
                    <div className={`shadow-md hover:scale-105 duration-500 py-9 rounded-lg shadow-blue-500`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'><b>{org}</b></p>
                        <p className='mt-4'>{title}</p>
                        <p className='mt-4'><b>{duration}</b></p>
                        <p className='mt-4'>{period}</p>
                    </div>
                    ))
                }
            </div>
         </div>
    </div>
  )
}

export default Experience;