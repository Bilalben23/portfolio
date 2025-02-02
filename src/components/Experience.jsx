const experiences = [
    {
        id: 1,
        company: "Freelance",
        title: "Full Stack Developer",
        details: [
            "Developed both frontend and backend for various web applications.",
            "Designed user-friendly interfaces and integrated backend services.",
            "Built and maintained RESTful APIs for various functionalities such as user authentication and data handling.",
            "Implemented security measures for protecting user data and ensuring safe transactions."
        ],
        duration: "Feb 2025 - Present"
    },
    {
        id: 2,
        company: "Freelance",
        title: "Frontend Developer",
        details: [
            "Designed and developed engaging and responsive user interfaces using React.js and other modern frontend technologies.",
            "Focused on improving user experience by ensuring clean and intuitive UI/UX design.",
            "Optimized frontend performance to ensure fast load times and responsiveness across devices."
        ],
        duration: "Freelance"
    },
    {
        id: 3,
        company: "Freelance",
        title: "Tester/Debugger",
        details: [
            "Tested and debugged various web applications to ensure functionality and quality.",
            "Diagnosed and fixed issues using tools like Chrome DevTools and Postman."
        ],
        duration: "Freelance"
    }
];



export default function Experience() {
    return (
        <section className='my-20'>
            <h4 className='w-fit px-5 shadow py-1 mx-auto rounded-xl bg-dark-200 text-dark-600 text-sm mb-4'>Experience</h4>
            <p className='text-center text-sm text-dark-600'>Here is a quick summary of my most recent experiences:</p>
            <div className='mt-6 flex gap-y-7 items-center flex-col'>
                {
                    experiences.map(experience => {
                        return <div className='flex flex-col md:flex-row  gap-y-3 gap-x-5 shadow-lg bg-dark-100 w-[95%] p-8 md:w-[70%] rounded justify-between' key={experience.id}>
                            <div className='flex-1'>
                                <p className='font-semibold text-lg text-[#10b981]'>{experience.company}</p>
                            </div>
                            <div className='flex-1 md:hidden'>
                                <p className='text-dark-600 text-xs'>{experience.duration}</p>
                            </div>
                            <div className='flex-2'>
                                <p className='font-semibold mb-2'>{experience.title}</p>
                                <ul className='list list-disc ml-5 text-dark-600 text-sm'>
                                    {
                                        experience.details.map((detail, index) => <li key={index}>{detail}</li>)
                                    }
                                </ul>
                            </div>
                            <div className='flex-1 md:block hidden'>
                                <p className='text-dark-600 text-xs'>{experience.duration}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}
