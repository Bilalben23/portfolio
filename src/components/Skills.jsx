import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiAlpinedotjs } from "react-icons/si";

export const skills = [
    { id: 1, name: "HTML", icon: <FaHtml5 size={45} className="text-orange-500" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt size={45} className="text-blue-500" /> },
    { id: 3, name: "TailwindCSS", icon: <SiTailwindcss size={45} className="text-cyan-500" /> },
    { id: 4, name: "JavaScript", icon: <FaJs size={45} className="text-yellow-500" /> },
    { id: 5, name: "React", icon: <FaReact size={45} className="text-blue-400" /> },
    { id: 6, name: "Node.js", icon: <FaNodeJs size={45} className="text-green-500" /> },
    { id: 8, name: "MongoDB", icon: <SiMongodb size={45} className="text-green-700" /> },
    { id: 9, name: "MySQL", icon: <SiMysql size={45} className="text-blue-600" /> },
    { id: 10, name: "Git", icon: <FaGitAlt size={45} className="text-red-500" /> },
    { id: 11, name: "GitHub", icon: <FaGithub size={45} className="text-gray-700" /> },
    { id: 12, name: "Laravel", icon: <FaLaravel size={45} className="text-red-600" /> },
];

export default function Skills() {
    return (
        <section className='bg-dark-default md:p-20 p-5'>
            <h3 className='w-fit px-5 shadow py-1 mx-auto rounded-xl bg-dark-200 text-dark-600 text-sm mb-4'>Compétences</h3>
            <p className='text-center text-sm'>Les compétences, outils et technologies dans lesquels j'excelle :</p>
            <div className='mt-8'>
                <div className='grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-x-5 gap-y-7'>
                    {
                        skills.map(skill => {
                            return <div key={skill.id} className='flex items-center flex-col gap-y-1'>
                                {skill.icon}
                                <p className='text-sm'>{skill.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
