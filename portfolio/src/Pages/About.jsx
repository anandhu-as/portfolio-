import React from "react";
import { FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";

const About = () => {
  return (
    <div className="w-full pt-28 px-6 space-y-20  min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Skills
        </h2>
        <Skills />
      </div>
      <Projects />
      <div className="max-w-5xl mx-auto text-center space-y-4 pb-16">
        <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
        <h3 className="text-gray-700">
          I’m always open to new opportunities and conversations. Reach out!
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-4">
          <div className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md">
            <FaEnvelope className="text-blue-500" />
            <span className="text-gray-700">anandhuas010203@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md">
            <FaGithub className="text-gray-800" />
            <span className="text-gray-700">anandhu-as</span>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md">
            <FaMapMarkerAlt className="text-red-500" />
            <span className="text-gray-700">Bangalore, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
