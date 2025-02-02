import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import personalImage from "../assets/personalImg.jpg"


export default function Hero() {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between bg-dark-default py-10 gap-y-6 px-5 md:px-20 gap-x-30 md:h-[calc(100vh-90px)] ' id="hero">
            <div>
                <h1 className='text-4xl font-black mb-2'>Hi, I am Bilal 👋</h1>
                <p className='text-sm text-dark-600'>I'm a passionate full-stack developer specializing in React.js and Node.js, dedicated to building high-performance, accessible, and visually engaging digital experiences. With over 3 years of experience in web development, I still approach every project with the same excitement and curiosity as when I first started. My goal is to create fast, responsive, and user-friendly applications that leave a lasting impact</p>
                <div className='mt-8 text-dark-600 text-xs'>
                    <div className='flex items-center gap-x-2'>
                        <FaLocationDot />
                        <p>Morocco</p>
                    </div>
                    <div className='flex items-center gap-x-2 pl-0.5 mt-1'>
                        <p className='w-[8px] h-[8px] bg-[#10b981] rounded-full shadow'></p>
                        <p>Available fro new projects</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-2 mt-8'>
                    <a href="#" className='btn btn-ghost btn-sm btn-circle'>
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/bilal-benyoussef-b38a27251" className='btn btn-ghost btn-sm btn-circle'>
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>


            <div className='relative'>
                <div className='bg-dark-200 w-[230px] h-[240px]'></div>
                <img src={personalImage} alt="Bilal's image" className='absolute w-full h-full -top-5 -left-5 border-r-8 border-b-8 border-dark-default' />
            </div>

        </div >
    )
}
