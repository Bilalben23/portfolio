import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { BiCopy } from "react-icons/bi";
import { toast } from 'react-toastify';

export default function Contact() {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success("Copié dans le presse-papiers !")
            }).catch((err) => {
                console.error("Échec de la copie : " + err);
                toast.error("Échec de la copie")
            })
    }

    return (
        <section className='p-20 bg-dark-default' id="contact">
            <h6 className="w-fit px-5 shadow py-1 mx-auto rounded-xl bg-dark-200 text-dark-600 text-sm mb-4">
                Contact
            </h6>
            <p className='text-center text-dark-600 max-w-2xl mx-auto'>
                Vous souhaitez me contacter ? N'hésitez pas à me joindre si vous cherchez un développeur,
                avez une question ou souhaitez simplement échanger.
            </p>
            <div className='flex flex-col gap-y-1 items-center mt-6'>
                <div className='flex items-center gap-x-3'>
                    <FaEnvelope size={24} />
                    <p className='text-lg font-semibold'>bouzizoua413@gmail.com</p>
                    <button type='button' className='btn btn-sm btn-circle btn-ghost' onClick={() => copyToClipboard("bouzizoua413@gmail.com")}>
                        <BiCopy size={24} />
                    </button>
                </div>
                <div className='flex items-center gap-x-3'>
                    <FaPhone size={24} />
                    <p className='text-lg font-semibold'>+212 680073964</p>
                    <button type='button' className='btn btn-sm btn-circle btn-ghost' onClick={() => copyToClipboard("+212680073964")}>
                        <BiCopy size={24} />
                    </button>
                </div>
            </div>
            <div className='flex flex-col items-center mt-6 gap-y-1'>
                <p className='text-dark-600'>Vous pouvez également me retrouver sur ces plateformes :</p>
                <div className='flex items-center gap-x-2'>
                    <a href="#" className='btn btn-ghost btn-sm btn-circle'>
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/youssef-bouzizoua-0a2438271" target='_blank' className='btn btn-ghost btn-sm btn-circle'>
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>

        </section>
    )
}
