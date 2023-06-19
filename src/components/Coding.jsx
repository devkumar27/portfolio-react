import React from 'react';
import leetcode from '../assets/leetcode.png';
import gfg from '../assets/gfg.png';
import hack from '../assets/hacker.png';


function Coding() {
      const techs=[
        {
            id:1,
            src: leetcode,
            title: 'LeetCode : 140+ Questions Solved',
            link: 'https://leetcode.com/devkr'
        },
        {
            id:2,
            src: gfg,
            title: 'GeeksForGeeks : 30+ Questions Solved',
            link: 'https://auth.geeksforgeeks.org/user/devkr/practice/'
        },
        {
            id:3,
            src: hack,
            title: 'HackerRank : 5 Star Java',
            link: 'https://www.hackerrank.com/dev270502?hr_r=1'
        }
    ]
  return (
    <div name='coding' className='bg-gradient-to-b from-gray-800 to to-black w-full h-screen'>
         <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 sm:py-1 inline'>
                  <br/>
                    Coding Profiles
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id, src, title, link, style})=>(
                        <a href={link} target='_blank' key={id} className={`shadow-md hover:scale-105 duration-500 py-9 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                        
                    </a>
                    ))
                }
            </div>
         </div>
    </div>
  )
}

export default Coding
