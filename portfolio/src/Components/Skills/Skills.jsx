import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiKalilinux,
  SiMysql,
} from "react-icons/si";

/* Parent container animation */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

/* Individual skill animation */
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Skill = ({ icon, label, color }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.08 }}
    className="flex flex-col items-center gap-2 p-4 rounded-xl shadow-md"
  >
    <div className={`text-4xl ${color}`}>{icon}</div>
    <p className="text-sm font-medium text-gray-700">{label}</p>
  </motion.div>
);

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, label: "HTML", color: "text-orange-500" },
    { icon: <FaCss3Alt />, label: "CSS", color: "text-blue-500" },
    { icon: <FaJsSquare />, label: "JavaScript", color: "text-yellow-400" },
    { icon: <SiTailwindcss />, label: "Tailwind", color: "text-cyan-400" },
    { icon: <FaReact />, label: "React", color: "text-sky-400" },
    { icon: <SiRedux />, label: "Redux", color: "text-purple-500" },
    { icon: <SiFirebase />, label: "Firebase", color: "text-yellow-500" },
    { icon: <FaGitAlt />, label: "Git", color: "text-orange-600" },
    { icon: <FaGithub />, label: "GitHub", color: "text-gray-800" },
    { icon: <FaLinux />, label: "Linux", color: "text-yellow-500" },
    { icon: <SiKalilinux />, label: "Kali Linux", color: "text-blue-600" },
    { icon: <SiMysql />, label: "SQL", color: "text-blue-500" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
    >
      {skills.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </motion.div>
  );
};

export default Skills;
