const experiences = [
    {
        id: 1,
        company: "Société d’électricité",
        title: "Stage Fin Formation – Service Informatique",
        details: [
            "Maintenance et installation de logiciels.",
            "Assistance dans la gestion et le suivi des systèmes informatiques.",
            "Participation à la résolution de problèmes techniques et à l’optimisation des processus internes."
        ],
        duration: "2024 – 1 mois"
    }
];

export default function Experience() {
    return (
        <section className='my-20'>
            <h4 className='w-fit px-5 shadow py-1 mx-auto rounded-xl bg-dark-200 text-dark-600 text-sm mb-4'>Expériences</h4>
            <p className='text-center text-sm text-dark-600'>Voici un résumé de mon expérience la plus récente :</p>
            <div className='mt-6 flex gap-y-7 items-center flex-col'>
                {
                    experiences.map(experience => {
                        return <div className='flex flex-col md:flex-row gap-y-3 gap-x-5 shadow-lg bg-dark-100 w-[95%] p-8 md:w-[70%] rounded justify-between' key={experience.id}>
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
