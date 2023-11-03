"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCards";
import ProjectTag from "./ProjectTag";

{
  /* Project Array */
}

const PROJECT_DATA = [
  {
    id: 1,
    title: "Movie overview",
    description: "Movie Rating Website, for current movies",
    image: "/images/projects/js-movie.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DevWavez/MovieRating",
    previewUrl: "https://movie-rating-nine.vercel.app/",
  },
  {
    id: 2,
    title: "Shiba Fanpage",
    description: "Odins Project",
    image: "/images/projects/Shiba.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DevWavez/Spas/tree/main/ShibaFanpage",
    previewUrl: "https://shiba-kohl.vercel.app/",
  },
  {
    id: 3,
    title: "Web3D",
    description: "Project from Udemy",
    image: "/images/projects/webD.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DevWavez/Spas/tree/main/DesignGbR-Spa",
    previewUrl: "https://web3-d-henna.vercel.app/",
  },
  {
    id: 4,
    title: "TinDog",
    description: "Project Bootcamp",
    image: "/images/projects/TinDog.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DevWavez/Spas/tree/main/TinDog%20Project",
    previewUrl: "https://tindog-sand.vercel.app/",
  },
  {
    id: 5,
    title: "Urban",
    description: "Own Project",
    image: "/images/projects/urban.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DevWavez/Urban",
    previewUrl: "https://urban-gray.vercel.app/",
  },
];

const ProjectSetcion = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <>
      <h2
        name="projects"
        className="text-center text-4xl font-bold text-white my-6"
      >
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {PROJECT_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSetcion;
