import React from "react";
import Logo from "../Home/Logo";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-1000 text-white p-1">
      <h1 className="text-3xl font-bold text-white mb-4">Get in Touch</h1>
      <h2 className="playwrite-in-custom-1 mt-4 text-xl text-gray-400">
        "We're More Ghosts Than People..."
      </h2>
      <div className="flex items-center justify-center w-full">
        <Logo />
      </div>
      <p className="mt-2 text-gray-400">Made with 👾</p>
    </div>
  );
};

export default Contact;
