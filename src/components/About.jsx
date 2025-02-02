import React from 'react'
import personalImage from "../assets/personalImg.jpg"


export default function About() {
    return (
        <section className='my-20 px-5 md:px-20' id='about'>
            <h2 className='w-fit px-5 shadow py-1 mx-auto rounded-xl bg-dark-200 text-dark-600 text-sm mb-8'>About me</h2>
            <div className='flex items-start gap-x-30 flex-col gap-y-4 md:flex-row'>

                <div className='relative grow-0 flex-1 mt-5 mx-auto'>
                    <div className='bg-dark-200 w-[350px] h-[400px]'></div>
                    <img src={personalImage} alt="Bilal's image" className='absolute w-full h-full -top-5 -right-5 border-b-8 border-l-8 border-dark-50' />
                </div>


                <div className='flex-1 text-xs flex flex-col gap-y-2'>
                    <p className='font-medium mb-3 text-base md:text-xl'>
                        <strong>Curious about me? Here you have it:</strong>
                    </p>
                    <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                    <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                    <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                    <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                    <p>Finally, some quick bits about me.</p>
                    <ul>
                        <li>B.E. in Computer Engineering</li>
                        <li>Full time freelancer</li>
                        <li>Avid learner</li>
                        <li>Aspiring indie hacker</li>
                    </ul>
                    <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                </div>
            </div>

        </section>
    )
}
