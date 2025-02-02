import React, { useState } from 'react';

// testimonials.js (you can import this from a separate file if needed)
const testimonials = [
    [
        {
            id: 1,
            image: "https://www.svgrepo.com/show/5125/avatar.svg",
            quote:
                "Job well done! I am really impressed. He is very very good at what he does :) I would recommend Sagar and will rehire in the future for Frontend development.",
            name: "John Doe",
            designation: "Founder - xyz.com",
        },
        {
            id: 2,
            image: "https://www.svgrepo.com/show/5125/avatar.svg",
            quote:
                "Excellent work and great communication! The project was completed on time and exceeded expectations.",
            name: "Jane Smith",
            designation: "CEO - abc.org",
        },
        {
            id: 3,
            image: "https://www.svgrepo.com/show/5125/avatar.svg",
            quote:
                "I was impressed with his attention to detail and technical skills. Highly recommend for any frontend project.",
            name: "Alice Johnson",
            designation: "Product Manager - example.com",
        },
    ]
];

export default function Testimonials() {
    const [activeGroup, setActiveGroup] = useState(0);

    return (
        <section className="py-20 w-[75%] mx-auto" id="testimonials">
            <h6 className="w-fit px-5 shadow py-1 mx-auto rounded-xl bg-dark-200 text-dark-600 text-sm mb-4">
                Testimonials
            </h6>
            <p className="text-sm text-center">
                Nice things people have said about me:
            </p>

            <div className="mt-7 grid grid-cols-3 gap-8">
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
