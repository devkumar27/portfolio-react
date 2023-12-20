import React from 'react';
import vitblogo from '../assets/portfolio/vitb.jpeg';
import campusschool from '../assets/portfolio/school.png';

const Education = () => {
    const techs = [
        {
            id:1,
            title: 'B.Tech. in Computer Science and Engineering',
            instt: 'Vellore Institute of Technology- Bhopal',
            CGPA_Percentage: 8.53,
            src: vitblogo
        },
        {
            id:2,
            title: 'XIIth Standard',
            instt: 'Campus School, Pantnagar (CBSE)',
            CGPA_Percentage: "85.40%",
            src: campusschool
        },
        {
            id:3,
            title: 'Xth Standard',
            instt: 'Campus School, Pantnagar (CBSE)',
            CGPA_Percentage: "91.33%",
            src: campusschool
        }
    ]
  return (
    <div name='education' className='bg-gradient-to-b from-gray-800 to to-black w-full h-screen'>
         <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 sm:py-1 inline'>
                  <br/>
                    Education
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id, title, src, instt, CGPA_Percentage, style})=>(
                    <div className={`shadow-md hover:scale-105 duration-500 py-9 rounded-lg shadow-blue-500`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'><b>{title}</b></p>
                        <p className='mt-4'>{instt}</p>
                        <p className='mt-4'>CGPA/Percentage- {CGPA_Percentage}</p>
                    </div>
                    ))
                }
            </div>
         </div>
    </div>
  )
}

export default Education;