import React from 'react';
import heroImage from '../assets/heroImage.png';
import {MdKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black bg-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full pb-8'>
                <h1 className='text-3xl text-gray-500 py-4 max-w-md font-bold'>
                   <center>Hello from, Dev Kumar!</center>
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Web Developer and Competetive Programmer
                </h2>
                <h3 className='text-gray-500 py-4 max-w-md font-bold'>
                I am a Final Year Computer Science student at Vellore Institute of Technology, Bhopal. I'm an extremely Passionate learner of new technology with interest in Javascript, Java and problem solving.
                <br/>

                </h3>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 cursor-pointer' >
                        <a href='https://docs.google.com/document/d/1ru1rILDP5bYFxa5jVvlbfkhJe4uA0V9o/edit?usp=sharing&ouid=101390188371137591602&rtpof=true&sd=true' target='_blank'>Resume</a>
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <br/>
                <br/>
                <img src={heroImage} alt="My profile" className='heroImg rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home
