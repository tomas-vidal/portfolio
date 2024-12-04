import ProjectIcon from "../icons/ProjectIcon";
import ProjectItem from "./ProjectItem";
import { projects } from "../data/projects";
import { projectType } from "../types/projects";

function Projects() {
  return (
    <div>
      <div className="mt-20 flex items-center mb-6 gap-2">
        <h2 className="text-2xl font-bold">Projectos</h2>
        <ProjectIcon className="text-2xl"></ProjectIcon>
      </div>
      <div className="flex flex-col gap-6">
        {projects.map((project: projectType) => {
          return (
            <ProjectItem
              title={project.title}
              text={project.text}
              img={project.imgUrl}
              stack={project.stack}
            ></ProjectItem>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
