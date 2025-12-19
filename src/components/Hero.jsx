import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import personalImage from "../assets/personalImg.jpg"

export default function Hero() {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between bg-dark-default py-10 gap-y-6 px-5 md:px-20 gap-x-30 md:h-[calc(100vh-90px)]' id="hero">
            <div>
                <h1 className='text-4xl font-black mb-2'>YOUSSEF BOUZIZOUA 👋</h1>
                <p className='max-w-3xl text-dark-600 text-lg'>
                    Technicien spécialisé en développement digital, motivé et passionné par les technologies de l’information.
                    Maîtrise du développement web et des outils numériques, avec une bonne capacité d’adaptation et un esprit d’équipe.
                    Je souhaite mettre mes compétences au service d’une entreprise innovante et contribuer à sa réussite.
                </p>

                <div className='mt-8 text-dark-600'>
                    <div className='flex items-center gap-x-2'>
                        <FaLocationDot />
                        <p>Ain Haouzi, Chefchaouen</p>
                    </div>
                    <div className='flex items-center gap-x-2 pl-0.5 mt-1'>
                        <p className='w-[8px] h-[8px] bg-[#10b981] rounded-full shadow'></p>
                        <p>Disponible pour de nouveaux projets</p>
                    </div>
                </div>

                <div className='flex items-center gap-x-2 mt-8'>
                    <a href="#" className='btn btn-ghost btn-sm btn-circle'>
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/youssef-bouzizoua-0a2438271" className='btn btn-ghost btn-sm btn-circle'>
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>

            <div className='relative'>
                <div className='bg-dark-200 w-[230px] h-[240px]'></div>
                <img
                    src={personalImage}
                    alt="Image de Youssef"
                    className='absolute w-full h-full -top-5 -left-5 border-r-8 border-b-8 border-dark-default'
                />
            </div>
        </div>
    )
}
