import React from 'react';
import Project from './Project';
import { IoLogoGithub } from "react-icons/io5";
const Projects = () => {
    return (
        <div id='projects' className="max-w-[1200px] mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold text-center text-white mb-8">Projects</h1>
            <Project />
            <div className="flex items-center justify-center mt-6 space-x-2">
                <h1 className="text-2xl text-white">See more projects at</h1>
                <a href="https://github.com/anandhu-as" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-black hover:bg-gray-800 transition duration-300 text-white shadow-lg">
                    <IoLogoGithub size={28} />
                </a>
            </div>
        </div>
    );
};
export default Projects;
