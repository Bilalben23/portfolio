import React from 'react'
import personalImage from "../assets/personalImage2.jpeg"


export default function About() {
    return (
        <section className='my-20 px-5 md:px-20' id='about'>
            <h2 className='w-fit px-5 shadow py-1 mx-auto rounded-xl bg-dark-200 text-dark-600 text-sm mb-8'>About me</h2>
            <div className='flex items-start gap-x-30 flex-col gap-y-4 md:flex-row'>

                <div className='relative grow-0 flex-1 mt-5 mx-auto'>
                    <div className='bg-dark-200 w-[340px] h-[380px]'></div>
                    <img src={personalImage} alt="Bilal's image" className='absolute w-full h-full -top-5 -right-5 border-b-8 border-l-8 border-dark-50' />
                </div>

                <div class="flex-1 text-xs flex flex-col gap-y-2">
                    <p class="font-medium mb-3 text-base md:text-xl">
                        <strong>Curious about me? Here you have it:</strong>
                    </p>
                    <p>
                        I'm a passionate full-stack developer specializing in <strong>React.js & Node.js</strong>.
                        I focus on building fast, accessible, and visually appealing digital experiences while writing
                        clean, efficient, and maintainable code.
                    </p>
                    <p>
                        My journey in web development started in 2022, and over the years, I've embraced modern technologies
                        like <strong>Express.js, React.js, TailwindCSS, and Mongodb</strong> to create cutting-edge applications.
                        I love working on projects from ideation to development and constantly learning to stay ahead.
                    </p>
                    <p>
                        When I'm not coding, you'll find me watching programming lectures on YouTube, learning something new, or writing about development on LinkedIn.
                    </p>
                    <p><strong>Quick facts about me:</strong></p>
                    <ul class="list-disc pl-5">
                        <li><strong>Full-time freelancer</strong></li>
                        <li><strong>Lifelong learner</strong></li>
                        <li><strong>Learning to become a Full Stack Software Engineer</strong></li>

                    </ul>
                    <p>
                        I'm open to freelance and contract opportunities—feel free to reach out and lets build something great! 🚀
                    </p>

                </div>


            </div>

        </section>
    )
}
