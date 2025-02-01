import React from 'react'
import { Link } from 'react-scroll'
import { FaStarAndCrescent } from "react-icons/fa"

export default function Header() {
    return (
        <header className='flex items-center justify-between bg-dark-default px-20 py-4'>
            <Link to="here" duration={500} smooth>
                <p>Bilal</p>
            </Link>
            <nav>
                <ul className='flex items-center gap-x-5'>
                    <li>
                        <Link
                            to="about"
                            className='cursor-pointer text-dark-600'
                            smooth
                            duration={500}>About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="work"
                            className='cursor-pointer text-dark-600'
                            smooth
                            duration={500}>Work</Link>
                    </li>
                    <li>
                        <Link
                            to="testimonials"
                            className='cursor-pointer text-dark-600'
                            smooth
                            duration={500}>Testimonials</Link>
                    </li>
                    <li>
                        <Link
                            to="testimonials"
                            className='cursor-pointer text-dark-600'
                            smooth
                            duration={500}>Contact</Link>
                    </li>
                    <div className='h-[30px] w-[2px] bg-dark-100 rounded-lg' />
                    <li>
                        <button type='button' className='btn btn-circle btn-sm btn-ghost'>
                            <FaStarAndCrescent size={20} />
                        </button>
                    </li>
                    <li>
                        <button type='button' className='btn bg-[#fff] text-black rounded-xl'>
                            Download CV
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
