import React from 'react'
import Animation from '../Animation/Animation'
import profile from "../../assets/profile.jpg"
import Logo from './Logo';

const Home = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>
            <div className="col-span-1 my-auto mx-auto flex justify-center">
                <div className='w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] overflow-hidden rounded-xl border-4 shadow-lg hover:scale-105 transition-transform duration-300'>
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-full object-cover  "
                    />
                </div>
            </div>
            <div className="col-span-2 px-5 my-auto flex flex-col justify-center">
                <h1 className="text-orange-400 text-3xl sm:text-4xl lg:text-5xl font-bold">

                    {<Animation />}
                </h1>
                <div className="text-gray-400">
                    <p className="sm:text-lg my-6 lg:text-xl">

                        Hey, I’m Anandhu!

                        I’m a 19-year-old computer science student with a love for coding and all tech things. I’m always exploring new tools, building cool projects, and finding ways to solve problems. rn, I’m diving deep into software development and looking for opportunities to learn and grow. Let’s connect!!!
                    </p>
                </div>
                <Logo />

            </div>

        </div>
    )
}

export default Home
