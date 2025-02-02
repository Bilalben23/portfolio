import React from 'react'


const experiences = [
    {
        company: "Google",
        title: "Frontend Engineer",
        details: [
            "Developed high-performance web applications using React.",
            "Collaborated with cross-functional teams to deliver innovative solutions.",
            "Optimized user interfaces for maximum speed and scalability.",
            "Integrated RESTful APIs to enhance data-driven features."
        ],
        duration: "Jan 2020 - Present"
    },
    {
        company: "Facebook",
        title: "Web Developer",
        details: [
            "Built responsive, mobile-first web interfaces using modern JS frameworks.",
            "Implemented A/B testing to improve conversion rates.",
            "Enhanced UX by collaborating closely with designers and product teams.",
            "Maintained and updated legacy code while migrating to new technologies."
        ],
        duration: "Mar 2018 - Dec 2019"
    },
    {
        company: "Amazon",
        title: "Software Engineer",
        details: [
            "Designed and developed scalable microservices for e-commerce.",
            "Worked on performance optimization and API integrations.",
            "Implemented CI/CD pipelines to automate testing and deployment.",
            "Collaborated with teams across different regions to standardize processes."
        ],
        duration: "Jun 2016 - Feb 2018"
    }
];



export default function Experience() {
    return (
        <section className='my-20'>
            <h4 className='w-fit px-5 shadow py-1 mx-auto rounded-xl bg-dark-200 text-dark-600 text-sm mb-4'>Experience</h4>
            <p className='text-center text-sm text-dark-600'>Here is a quick summary of my most recent experiences:</p>
            <div className='mt-6 flex flex-col gap-y-7 items-center'>
                {
                    experiences.map(experience => {
                        return <div className='flex gap-x-5 shadow-lg bg-dark-100 p-8 w-[70%] rounded justify-between' key={experience.id}>
                            <div className='flex-1'>
                                <p className='font-semibold text-lg text-[#10b981]'>{experience.company}</p>
                            </div>
                            <div className='flex-2'>
                                <p className='font-semibold mb-2'>{experience.title}</p>
                                <ul className='list list-disc ml-5 text-dark-600 text-sm'>
                                    {
                                        experience.details.map((detail, index) => <li key={index}>{detail}</li>)
                                    }
                                </ul>
                            </div>
                            <div className='flex-1'>
                                <p className='text-dark-600 text-xs'>{experience.duration}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}
