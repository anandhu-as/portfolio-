import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 text-center space-y-6 sm:space-y-8"
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
        Hello <span className="text-blue-400">hoomans!</span>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-xl mx-auto">
        I'm Anandhu. I code, write blogs, read, and sometimes just scroll the world away.
      </p>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-xl mx-auto">
        Passionate about creating, learning, and sharing ideas—one project and one story at a time.
      </p>

      <blockquote className="italic text-gray-500 max-w-md mx-auto sm:text-lg md:text-xl">
        "trying to understand life and CSS"
      </blockquote>

      <motion.a
        href="https://typenio.vercel.app/"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-full font-semibold text-lg sm:text-xl"
      >
        Read My Thoughts
      </motion.a>
    </motion.div>
  );
};

export default Home;
