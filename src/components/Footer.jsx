import React from 'react'

export default function Footer() {
    const date = new Date();
    return (
        <footer className='p-3'>
            <div className='flex items-center justify-center text-sm'>
                <p>&copy; {date.getFullYear()} | coded by ❤ Bilal Benyoussef</p>
            </div>
        </footer>
    )
}
