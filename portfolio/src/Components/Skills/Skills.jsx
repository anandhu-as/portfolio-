import React from "react";
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

const Skill = ({ icon, label, color }) => (
  <div className="flex flex-col items-center gap-2 p-4  rounded-xl shadow-md hover:scale-105 transition">
    <div className={`text-4xl ${color}`}>{icon}</div>
    <p className="text-sm font-medium text-gray-700">{label}</p>
  </div>
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
  return <div>
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </div>
  </div>;
};

export default Skills;
