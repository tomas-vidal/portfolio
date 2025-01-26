import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import dataProjects from "../api/dataProjects";

function Projects() {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-stone-900 mb-5 dark:text-white">
        Proyectos
      </h1>
      <ul className="flex justify-around">
        {dataProjects.map((item) => (
          <ProjectTemplate
            title={item.title}
            img={item.img}
            description={item.description}
            githubLink={item.githubLink}
          />
        ))}
      </ul>
    </div>
  );
}

export default Projects;
