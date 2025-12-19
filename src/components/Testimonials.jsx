import React, { useState } from 'react';

const testimonials = [
    [
        {
            id: 1,
            image: "https://www.svgrepo.com/show/5125/avatar.svg",
            quote:
                "Youssef a démontré d'excellentes compétences en développement full-stack. Son travail est précis et il respecte toujours les délais.",
            name: "Bilal Ben Youssef",
            designation: "Développeur Full-Stack - Freelance",
        },
        {
            id: 2,
            image: "https://www.svgrepo.com/show/5125/avatar.svg",
            quote:
                "Une collaboration très efficace ! Youssef maîtrise parfaitement React et Laravel et a livré un projet de grande qualité.",
            name: "Salma El Idrissi",
            designation: "Professeur en Informatique - Université de Chefchaouen",
        },
        {
            id: 3,
            image: "https://www.svgrepo.com/show/5125/avatar.svg",
            quote:
                "Youssef a montré beaucoup de motivation et une bonne maîtrise des outils informatiques durant son stage. Son travail sur la maintenance et l'installation des logiciels a été très satisfaisant.",
            name: "Mohamed Idrissi",
            designation: "Superviseur de stage – Société d'électricité",
        }
    ]
];


export default function Testimonials() {
    const [activeGroup, setActiveGroup] = useState(0);

    return (
        <section className="py-20 md:w-[75%] w-[90%] mx-auto" id="testimonials">
            <h6 className="w-fit px-5 shadow py-1 mx-auto rounded-xl bg-dark-200 text-dark-600 text-sm mb-4">
                Témoignages
            </h6>
            <p className="text-sm text-center">
                Ce que les gens disent de moi :
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {testimonials[activeGroup].map((testimonial) => (
                    <div key={testimonial.id} className="p-5 rounded-md shadow bg-dark-100">
                        <div className="w-[50px] h-[50px] rounded-full mx-auto mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-sm">
                            <blockquote className="text-dark-600">
                                “{testimonial.quote}”
                            </blockquote>
                            <p className="font-semibold capitalize text-center mt-3">
                                {testimonial.name}
                            </p>
                            <p className="text-dark-600 text-center text-xs mt-1">
                                {testimonial.designation}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {testimonials.length > 1 && (
                <div className="flex gap-x-4 mt-4 items-center justify-center">
                    {testimonials.map((_, index) => (
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
    );
}
