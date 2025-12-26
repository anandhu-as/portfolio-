import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[80%]">
      <div className="backdrop-blur-md bg-white/10 rounded-full px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-semibold text-gray-900"
          >
            Anand<span className="text-blue-500">hu</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-xl text-gray-700">
              <a
                href="https://github.com/anandhu-as"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-900"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/anandhu-as-aa44b0248/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/ana_ndhu_as?igsh=MWpmb3Z3ZGplNDYz"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-300"
              >
                <FaInstagram />
              </a>
            </div>

            <Link to="/about" className="font-medium text-gray-800">
              Projects <span className="text-blue-500">&</span> Stuff
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-900"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-60 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 text-xl text-gray-700 pb-2">
            <div className="flex gap-6 text-2xl">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-800"
            >
              Projects <span className="text-blue-500">&</span> Stuff
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
