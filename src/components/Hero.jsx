import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import personalImage from "../assets/personalImg.jpg"


export default function Hero() {
    return (
        <div className='flex items-center justify-between bg-dark-default p-10 gap-x-30 h-[calc(100vh-90px)]'>
            <div >
                <h1 className='text-4xl font-black mb-2'>Hi, I am Bilal 👋</h1>
                <p className='text-sm text-dark-500'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 3 years, I still love it as if it was something new.</p>
                <div className='mt-8 text-dark-500 text-xs'>
                    <div className='flex items-center gap-x-2'>
                        <FaLocationDot />
                        <p>Tanger, Morocco</p>
                    </div>
                    <div className='flex items-center gap-x-2 pl-0.5 mt-1'>
                        <p className='w-[8px] h-[8px] bg-[#10b981] rounded-full shadow'></p>
                        <p className=''>Available fro new projects</p>
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
                <div className='bg-dark-100 w-[230px] h-[240px]'></div>
                <img src={personalImage} alt="Bilal's image" className='absolute w-full h-full -top-5 -left-5 border-8 border-dark-default' />
            </div>
        </div>
    )
}
