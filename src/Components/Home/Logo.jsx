import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
const Logo = () => {
    return (
        <div className="flex space-x-6 my-8">
            <a href="https://github.com/anandhu-as" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-black hover:bg-gray-800 transition duration-300 text-white shadow-lg">
                <IoLogoGithub size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-black hover:bg-blue-800 transition duration-300 text-white shadow-lg">
                <IoLogoLinkedin size={28} />
            </a>
            <a href="anandhuas0102@gmail.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-black hover:bg-red-400 transition duration-300 text-white shadow-lg">
                <MdEmail size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-black hover:bg-pink-500 transition duration-300 text-white shadow-lg">
                <FaSquareInstagram size={28} />
            </a>
        </div>
    )
}

export default Logo
