import React from 'react'
import personalImage from "../assets/personalImage2.jpeg"

export default function About() {
    return (
        <section className='my-20 px-5 md:px-20' id='about'>
            <h2 className='w-fit px-5 shadow py-1 mx-auto rounded-xl bg-dark-200 text-dark-600 mb-8'>À propos de moi</h2>
            <div className='flex items-start gap-x-30 flex-col gap-y-4 md:flex-row'>

                <div className='relative grow-0 flex-1 mt-5 mx-auto'>
                    <div className='bg-dark-200 w-[340px] h-[380px]'></div>
                    <img src={personalImage} alt="Image de Youssef" className='absolute w-full h-full -top-5 -right-5 border-b-8 border-l-8 border-dark-50' />
                </div>

                <div className="flex-1 flex flex-col gap-y-2">
                    <p className="font-medium mb-3 text-base md:text-xl">
                        <strong>Curieux d'en savoir plus sur moi ? Voici quelques informations :</strong>
                    </p>
                    <p>
                        Je suis un technicien spécialisé en <strong>développement digital</strong>, motivé et passionné par les technologies de l'information.
                        Je maîtrise le développement web et les outils numériques, avec une bonne capacité d'adaptation et un esprit d'équipe.
                    </p>
                    <p>
                        Mon parcours a commencé par une formation à l'OFPPT en <strong>Développement Digital</strong>, et j'ai effectué un stage de fin de formation dans une société d'électricité, où j'ai participé à la maintenance et à l'installation de logiciels.
                        Je continue à développer mes compétences sur des technologies comme <strong>HTML, CSS, JavaScript, PHP, MySQL, Word, Excel et PowerPoint</strong>.
                    </p>
                    <p>
                        Quand je ne travaille pas sur des projets digitaux, j'aime apprendre de nouvelles compétences et améliorer mes connaissances en développement.
                    </p>
                    <p><strong>Quelques faits rapides à propos de moi :</strong></p>
                    <ul className="list-disc pl-5">
                        <li><strong>Technicien en développement digital</strong></li>
                        <li><strong>Apprentissage rapide</strong></li>
                        <li><strong>Travail en équipe et gestion de projets</strong></li>
                        <li><strong>Ouvert aux stages et opportunités professionnelles</strong></li>
                    </ul>
                    <p>
                        N’hésitez pas à me contacter pour collaborer sur des projets digitaux et innovants ! 🚀
                    </p>

                </div>

            </div>

        </section>
    )
}
