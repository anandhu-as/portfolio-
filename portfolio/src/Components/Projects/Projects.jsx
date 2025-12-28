import React from "react";
import animehub from "../../Images/animehub.png";
import typen from "../../Images/typen.png";
import ape from "../../Images/ape.png";
const Projects = () => {
  const projects = [
    {
      name: "Typen.io",
      link: "https://typenio.vercel.app/",
      image: typen,
      description:
        "typen.io is a simple blog app where I share my personal stories, thoughts, and experiences—unfiltered and real. It’s also a space for others to write and publish their own blogs. The platform isn’t about perfection or polish; it’s about honesty, expression, and real voices.",
    },
    {
      name: "AnimeHub",
      link: "https://anime-hub-sigma.vercel.app/",
      image: animehub,
      description:
        "This website allow users to explore and discover various animeseries,we use the Jikan API which provide data about anime,manga and anime related content",
    },
    {
      name: "BoredApes",
      link: "https://e-commerce-fvu7jdf5z-anandhu-as.vercel.app",
      image: ape,
      description:
        "Bored Apes are a specific collection of 10,000 non-fungible tokens. Each NFT is a singular image of a unique Bored Ape. Every image is a portrait of an Ape with specific characteristics. This app is made for learning purposes. ",
    },
    {
      name: "Will do more projects",
      link: "#",
      image: "",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 flex flex-col"
            >
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-gray-400">No preview</span>
                )}
              </div>
              <div className="p-4 flex flex-col items-center justify-start space-y-2 flex-1">
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {project.name}
                </h3>
                {project.description && (
                  <p className="text-gray-600 text-center">
                    {project.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
