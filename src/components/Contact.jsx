import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { BiCopy } from "react-icons/bi";
import { toast } from 'react-toastify';

export default function Contact() {



    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success("Copied to clipboard!")
            }).catch((err) => {
                console.error("failed to cop: " + err);
                toast.error("Failed to copy")
            })
    }


    return (
        <section className='p-20 bg-dark-default' id="contact">
            <h6 className="w-fit px-5 shadow py-1 mx-auto rounded-xl bg-dark-200 text-dark-600 text-sm mb-4">
                Get in touch
            </h6>
            <p className='text-sm text-center text-dark-600'>What's next? Feel free to reach out to me if you're looking for <br /> a developer, have a query, or simply want to connect.</p>
            <div className='flex flex-col gap-y-1 items-center mt-6'>
                <div className='flex items-center gap-x-3'>
                    <FaEnvelope size={24} />
                    <p className='text-lg font-semibold'>bilalbeny735@gmail.com</p>
                    <button type='button' className='btn btn-sm btn-circle btn-ghost' onClick={() => copyToClipboard("bilalbeny735@gmail.com")}>
                        <BiCopy size={24} />
                    </button>
                </div>
                <div className='flex items-center gap-x-3'>
                    <FaPhone size={24} />
                    <p className='text-lg font-semibold'>+212664897030</p>
                    <button type='button' className='btn btn-sm btn-circle btn-ghost' onClick={() => copyToClipboard("+212664897030")}>
                        <BiCopy size={24} />
                    </button>
                </div>
            </div>
            <div className='flex flex-col items-center mt-6 gap-y-1'>
                <p className='text-xs text-dark-600'>You may also find me on these platforms!</p>
                <div className='flex items-center gap-x-2'>
                    <a href="#" className='btn btn-ghost btn-sm btn-circle'>
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/bilal-benyoussef-b38a27251" className='btn btn-ghost btn-sm btn-circle'>
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>

        </section>
    )
}
