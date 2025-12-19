import { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi';
import project1 from "../assets/project1.png";
import project2 from "../assets/project1.png";
import project3 from "../assets/project1.png";
import project4 from "../assets/project1.png";
import project5 from "../assets/project1.png";

const projects = [
    [
        {
            id: 1,
            name: "Social Connect",
            description:
                "Une application de réseau social utilisant Laravel et React, permettant aux utilisateurs de se connecter, partager des publications et discuter en temps réel.",
            techStack: [
                "React",
                "Laravel",
                "Bootstrap",
                "MySQL",
                "TailwindCSS"
            ],
            demoLink: "https://socialconnect.example.com",
            image: project2,
        },
        {
            id: 2,
            name: "Task Master",
            description:
                "Une application de gestion de tâches pour aider les utilisateurs à organiser leurs projets, définir des échéances et suivre l'avancement. Construite avec Laravel et React avec une interface intuitive.",
            techStack: [
                "React",
                "Laravel",
                "TailwindCSS",
                "MySQL",
                "Axios"
            ],
            demoLink: "https://taskmaster.example.com",
            image: project3,
        }
    ],
    [
        {
            id: 4,
            name: "Blogify",
            description:
                "Une plateforme de blog dynamique permettant aux utilisateurs de créer, éditer et partager des articles avec un éditeur de texte enrichi. Basée sur Laravel et React pour une expérience fluide d’écriture.",
            techStack: [
                "React",
                "Laravel",
                "Quill.js",
                "MySQL",
                "CSS3"
            ],
            demoLink: "https://blogify.example.com",
            image: project4,
        },
        {
            id: 5,
            name: "ChatNow",
            description:
                "Une application de chat en temps réel construite avec Laravel et React, offrant messagerie instantanée et discussions de groupe.",
            techStack: [
                "React",
                "Laravel",
                "Socket.io",
                "MySQL",
                "Material-UI"
            ],
            demoLink: "https://chatnow.example.com",
            image: project5,
        }
    ]
];

export default function Work() {
    const [activeGroup, setActiveGroup] = useState(0);

    return (
        <section className='bg-dark-default p-5 md:p-20' id="work">
            <h5 className='w-fit px-5 shadow py-1 mx-auto rounded-xl bg-dark-200 text-dark-600 text-sm mb-4'>Projets</h5>
            <p className='text-sm text-center'>Quelques-uns des projets notables que j'ai réalisés :</p>

            <div className='mt-8 flex flex-col gap-y-8'>
                {
                    projects[activeGroup].map((project, index) => {
                        return <div className={`flex flex-col-reverse rounded-lg overflow-clip ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`} key={project.id}>
                            <div className="flex-1 bg-dark-100 p-7">
                                <p className='text-lg font-semibold mb-3'>{project.name}</p>
                                <p className='text-sm mb-6 text-dark-600'>{project.description}</p>
                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {
                                        project.techStack.map((tech, index) => <p className='px-3 py-0.5 rounded-2xl text-sm bg-dark-200 shadow' key={index}>{tech}</p>)
                                    }
                                </div>
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark-500 hover:text-dark-800 transition"
                                >
                                    <FiExternalLink size={25} />
                                </a>
                            </div>

                            <div className='flex-1 bg-dark-200 p-7'>
                                <img src={project.image} alt={project.name} className='w-full h-full object-cover' />
                            </div>
                        </div>
                    })
                }
            </div>
            {projects.length > 1 && (
                <div className="flex gap-x-4 mt-4 items-center justify-center">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setActiveGroup(index)}
                            className={`w-[20px] h-[20px] rounded-full shadow cursor-pointer ${activeGroup === index ? 'bg-dark-600' : 'bg-dark-400'
                                }`}
                        ></button>
                    ))}
                </div>
            )}
        </section>
    )
}
