import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import dataProjects from "../api/dataProjects";

function Projects() {
  return (
    <section className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-stone-900 mb-5 dark:text-white">
        Proyectos
      </h1>
      <ul className="grid gap-2 grid-cols-2 lg:gap-2 md:grid-cols-1 md:grid-flow-row md:place-items-center">
        {dataProjects.map((item, index) => (
          <ProjectTemplate
            title={item.title}
            img={item.img}
            description={item.description}
            githubLink={item.githubLink}
            key={index}
          />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
