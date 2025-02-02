import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaStarAndCrescent, FaSun } from "react-icons/fa";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleMobileMenu = (e) => {
        setIsMobileMenuOpen(e.target.checked);
    };

    const toggleTheme = (e) => {
        setIsDarkTheme(!e.target.checked); // when checkbox is checked, switch to light theme
        // Optionally, you can apply the theme class to documentElement here:
        // document.documentElement.classList.toggle('light-theme', e.target.checked);
    };

    return (
        <header className='flex items-center justify-between bg-dark-default px-5 sm:px-10 md:px-20 py-4'>
            {/* Logo */}
            <Link to="hero" duration={500} smooth>
                <button type="button" className='cursor-pointer font-semibold text-lg'>
                    &lt;BB /&gt;
                </button>
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:block transition'>
                <ul className='flex items-center gap-x-5'>
                    {["about", "work", "testimonials", "contact"].map((section) => (
                        <li key={section}>
                            <Link
                                to={section}
                                className='cursor-pointer text-dark-600'
                                smooth
                                duration={500}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
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

            {/* Mobile Menu Button */}
            <div className='block md:hidden'>
                <label className="btn btn-circle swap btn-ghost swap-rotate">
                    <input
                        type="checkbox"
                        onChange={toggleMobileMenu}
                        checked={isMobileMenuOpen}
                    />
                    <FaBars size={25} className='swap-off' />
                    <FaTimes size={25} className='swap-on' />
                </label>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <nav className="absolute h-[calc(100vh-80px)] z-10 top-16 right-0 bg-dark-default shadow-lg w-full md:hidden border-t border-dark-100">
                    <ul className='flex flex-col gap-y-3 p-6'>
                        {["about", "work", "testimonials", "contact"].map((section) => (
                            <li key={section}>
                                <Link
                                    to={section}
                                    className='cursor-pointer text-dark-600 block'
                                    smooth
                                    duration={500}
                                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </li>
                        ))}
                        <div className='h-[0.5px] w-full bg-dark-100 my-2.5'></div>
                        <li className="flex items-center justify-between mb-3">
                            <p className='text-sm text-dark-600'>Switch Theme</p>
                            <label className="btn btn-circle swap swap-rotate btn-ghost">
                                <input
                                    type="checkbox"
                                    onChange={toggleTheme}
                                    checked={!isDarkTheme}
                                />
                                <FaStarAndCrescent size={25} className='swap-off' />
                                <FaSun size={25} className='swap-on' />
                            </label>
                        </li>
                        <li>
                            <button type='button' className='btn bg-[#fff] text-black rounded-xl w-full'>
                                Download CV
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
