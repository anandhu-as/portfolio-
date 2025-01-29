import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    const handleClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='bg-#060606 h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className=' playwrite-in-custom-1 text-3xl font-bold primary-color ml-4'>Anandhu</h1>
            <ul className="hidden md:flex">
                <li className="p-5"><a href="/">/</a></li>

                <li className="nav-links p-5"><a href="#skills" onClick={() => handleClick('skills')}>Skills</a></li>
                <li className="nav-links p-5"><a href="#projects" onClick={() => handleClick('projects')}>projects</a></li>
                <li className="nav-links p-5"><a href="#contact" onClick={() => handleClick('contact')}>Contact</a></li>
            </ul>
            <div className="block md:hidden mr-6" onClick={handleNav}>
                {nav ? <AiOutlineClose size={20} /> : < AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#000000] ease-in-out duration-800' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl  primary-color ml-4'>Anandhu</h1>
                <ul className='p-8 text-2xl'>
                    <li className="p-2"><a href="#skills" onClick={() => handleClick('skills')}>Skills</a></li>
                    <li className="p-2"><a href="#projects" onClick={() => handleClick('projects')}>projects</a></li>
                    <li className="p-2"><a href="#contact" onClick={() => handleClick('contact')}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
